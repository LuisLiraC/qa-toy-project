import React from 'react'
import BackButton from '../components/BackButton'
import AddCharacterForm from '../components/AddCharacterForm'

export default function AddCharacter() {
    return (
        <div className="Section">
            <BackButton />
            <h2>Add character</h2>
            <AddCharacterForm />
        </div>
    )
}