import React from 'react'

export default function ErrorMessage({ message }) {
    if (!message) return null

    return (
        <div className="Error">
            <p className="Error__message">{message}</p>
        </div>
    )
}