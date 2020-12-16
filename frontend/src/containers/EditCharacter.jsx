import React from 'react'
import EditCharacterForm from '../components/EditCharacterForm'
import BackButton from '../components/BackButton'

import { GET_CHARACTER, GET_ENUM_VALUES } from '../gql/queries'
import { useQuery } from '@apollo/client'

export default function EditCharacter({ match }) {
    const { id } = match.params

    const { loading, error, data } = useQuery(GET_ENUM_VALUES)
    const { loading: charLoading, error: charError, data: charData } = useQuery(GET_CHARACTER, {
        variables: { id },
    })

    if (loading || charLoading) return <p>Loading</p>
    if (error || charError) return <p>Error</p>

    const genders = data.genderValues.enumValues
    const races = data.raceValues.enumValues
    const { image_url, __typename, ...rest } = charData.getCharacter

    return (
        <div className="Section">
            <BackButton />
            <h2>Edit character</h2>
            <EditCharacterForm 
                id={id} 
                races={races}
                genders={genders}
                data={rest}
                image_url={image_url}
            />

        </div>
    )
}