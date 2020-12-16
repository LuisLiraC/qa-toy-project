import React from 'react'
import BackButton from '../components/BackButton'
import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../gql/queries'

export default function Details({ match }) {
    const { id } = match.params
    const { loading, error, data, refetch } = useQuery(GET_CHARACTER, {
        variables: { id }
    })

    if (loading) return (
        <>
            <BackButton />
            <p>Loading</p>
        </>
    )
    if (error) return (
        <>
            <BackButton />
            <p>Loading</p>
        </>
    )
    refetch()

    const { 
        image_url,
        name,
        race,
        gender,
        description,
    } = data.getCharacter

    return (
        <div className="Section">
            <BackButton />
            <div className="Details">
                <img src={image_url} alt=""/>
                <div className="Details__info">
                    <p>
                        <span>Name: </span>
                        {name}
                    </p>
                    <p>
                        <span>Race: </span>
                        {race}
                    </p>
                    <p>
                        <span>Gender: </span>
                        {gender}
                    </p>
                    <p>
                        <span>Description: </span>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}