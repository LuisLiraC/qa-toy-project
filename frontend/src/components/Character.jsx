import React from 'react'
import { Link } from 'react-router-dom'

export default function Character({ image, name, _id }) {
    return (
        <div className="Character">
            <img 
                src={image} 
                alt="character"
                className="Character__image"
            />
            <p
                className="Character__name"
            >{name}</p>
            <Link
                to={`/character/details/${_id}`}
                className="Character__details Button"
            >Details</Link>
            <Link
                to={`/character/edit/${_id}`}
                className="Character__edit Button"
            >Edit</Link>
        </div>
    )
}