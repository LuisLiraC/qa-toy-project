import React, { useRef } from 'react'

export default function ImagePreviewInput({ form, setForm, image_url }) {
    const inputFile = useRef(null)

    const openFileExplorer = (e) => {
        e.preventDefault()
        inputFile.current.click()
    }

    const imageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setForm({
                    ...form,
                    image: reader.result
                })
            }
        }
        if (!e.target.files[0]) return
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className="ImagePreview">
            <img 
                src={form.image ? form.image : image_url}
                alt="character"
                className="ImagePreview__image"
            />
            <button 
                onClick={openFileExplorer}
                className="ImagePreview__button Button Choose"
            >
                Choose file</button>
            <input
                type="file"
                name="file"
                onChange={imageHandler}
                accept=".png,.jpg,.jpeg"
                ref={inputFile}
                className="ImagePreview__button--hidden"
            />
        </div>
    )
}