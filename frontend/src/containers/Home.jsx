import React from 'react'
import { Link } from 'react-router-dom'
import CharactersGrid from '../components/CharactersGrid'

export default function Home() {

    return(
        <div className="Section">
            <Link to="/character/add" className="Button Add">
                Add Character
            </Link>
            <CharactersGrid />
        </div>
    )
}