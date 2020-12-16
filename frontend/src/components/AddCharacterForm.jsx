import React, { useState } from 'react'
import { GET_ENUM_VALUES, ADD_CHARACTER } from '../gql/queries'
import { useQuery, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import ImagePreviewInput from './ImagePreviewInput'
import ErrorMessage from './ErrorMessage'
import Modal from './Modal'

const defaultImage = "https://uwosh.edu/deanofstudents/wp-content/uploads/sites/156/2019/02/profile-default.jpg"
const initialState = {
    name: '',
    image: defaultImage,
    description: '',
    race: '',
    gender: ''
}

export default function AddCharacterForm() {
    const history = useHistory()
    const [form, setForm] = useState(initialState)
    const [formError, setFormError] = useState(null)
    const [modalState, setModalState] = useState(false)

    const [addCharacter] = useMutation(ADD_CHARACTER)
    const { loading, error, data } = useQuery(GET_ENUM_VALUES)

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    const genders = data.genderValues.enumValues
    const races = data.raceValues.enumValues

    const handleChange = (e) => {
        if (formError) setFormError(null)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        for (const prop in form) {
            if (form[prop] === "") {
                setFormError('Fill all the blanks')
                return
            }
        }
        if (form.image === defaultImage) {
            setFormError('Choose an image')
            return
        }

        setModalState(true)
        addCharacter({ variables: { characterInfo: form } })
            .then(({ data: { addCharacter: response } }) => {
                if (response.error) {
                    setFormError(response.message)
                    return
                }
                history.push(`/character/details/${response._id}`)
            })
            .catch((error) => {
                console.log(error)
                setFormError('Unexpected Error')
                setModalState(false)
            })
    }

    return (
        <>
            <p>Test</p>
            <ErrorMessage message={formError} />
            <form onSubmit={handleSubmit} className="Form">
                <ImagePreviewInput form={form} setForm={setForm} />
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    placeholder="Name"
                    minLength="2"
                    maxLength="30"
                    required
                    className="Form__input"
                />
                <select 
                    name="race"
                    onChange={handleChange}
                    value={form.race}
                    required
                    className="Form__input"
                >
                    <option disabled></option>
                    {
                        races.map(race => <option key={race.name} value={race.name}>{race.name}</option>)
                    }
                </select>
                <select
                    name="gender"
                    onChange={handleChange}
                    value={form.gender}
                    required
                    className="Form__input"
                >
                    <option disabled></option>
                    {
                        genders.map(gender => <option key={gender.name} value={gender.name}>{gender.name}</option>)
                    }
                </select>
                <textarea
                    name="description"
                    cols="30"
                    rows="10"
                    placeholder="Description"
                    onChange={handleChange}
                    minLength="50"
                    maxLength="300"
                    value={form.description}
                    required
                    className="Form__input"
                />
                <input 
                    type="submit"
                    value="Save"
                    className="Form__input Button Save"
                />
            </form>
            <Modal open={modalState}>
                    <div>
                        <h3>Saving</h3>
                        <p>Please wait a moment</p>
                    </div>
            </Modal>
        </>
    )
}