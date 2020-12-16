import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children, open, onClose }) {
    if (!open) return null
    return createPortal(
        <div className="Modal">
            <div onClick={onClose} className="Modal__overlay" />
            <div className="Modal__content">
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}