import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../gql/queries'
import Character from '../components/Character'

export default function CharactersGrid() {
    const { loading, error, data, refetch } = useQuery(GET_CHARACTERS)

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    refetch()

    return (
        <div className="CharactersGrid">
            {
                data.getCharacters.map(character => 
                    <Character
                        key={character._id}
                        image={character.image_url}
                        name={character.name}
                        _id={character._id}
                    />
                )
            }
        </div>
    )
}