import React, { useState } from 'react'
import Modal from './Modal'
import { useMutation } from '@apollo/client'
import { DELETE_CHARACTER, EDIT_CHARACTER } from '../gql/queries'
import { useHistory } from 'react-router-dom'
import ImagePreviewInput from './ImagePreviewInput'
import ErrorMessage from './ErrorMessage'

export default function EditCharacterForm({ id, data, races, genders, image_url }) {
    const history = useHistory()
    const [form, setForm] = useState(data)
    const [formError, setFormError] = useState(null)
    const [modalState, setModalState] = useState(false)
    const [savingModalState, setSavingModalState] = useState(false)

    const [deleteCharacter] = useMutation(DELETE_CHARACTER)
    const [editCharacter] = useMutation(EDIT_CHARACTER)

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

        setSavingModalState(true)
        editCharacter({ variables: { id, characterInfo: form } })
            .then(({ data: { editCharacter: response } }) => {
                if (response.error) {
                    setSavingModalState(false)
                    setFormError(response.message)
                    return
                }
                history.push(`/character/details/${id}`)
            })
            .catch((error) => {
                console.log(error)
                setFormError('Unexpected Error')
                setSavingModalState(false)
            })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteCharacter({ variables: { id }})
            .then(({ data: { deleteCharacter: response } }) => {
                if (response.error) {
                    setFormError(response.message)
                    setModalState(false)
                    return
                }
                history.push('/')
            })
            .catch((error) => {
                console.log(error)
                setFormError('Unexpected Error')
                setModalState(false)
            })
    }

    return (
        <>
            <ErrorMessage message={formError}/>
            <form onSubmit={handleSubmit} className="Form">
                <ImagePreviewInput form={form} setForm={setForm} image_url={image_url} />
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

            <p 
                onClick={() => setModalState(true)}
                className="Delete"
            >Delete character</p>
            <Modal open={modalState} onClose={() => setModalState(false)}>
                <div>
                    <h3>Are you sure you want to delete this character?</h3>
                    <button
                        onClick={handleDelete}
                        className="Button Modal__confirm"
                    >Confirm</button>
                    <button
                        onClick={() => setModalState(false)}
                        className="Button Modal__cancel"
                    >Cancel</button>
                </div>
            </Modal>
            <Modal open={savingModalState}>
                    <div>
                        <h3>Saving</h3>
                        <p>Please wait a moment</p>
                    </div>
            </Modal>
        </>
    )
}