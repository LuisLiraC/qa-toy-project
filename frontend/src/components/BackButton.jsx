import React from 'react'
import { Link } from 'react-router-dom'

export default function BackButton() {
    return (
        <div className="Backbutton">
            <Link to="/" className="Backbutton__link">
                {'<'} Back
            </Link>
        </div>
    )
}