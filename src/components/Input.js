import React, { useState, useEffect } from 'react'

const Input = ({ state, setState, bake_cookie, cookie_key }) => {

    const [note, setNote] = useState('')

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (note !== '') {
                    let temp = [...state, note]
                    setState(temp)
                    bake_cookie(cookie_key, temp)
                    setNote('')
                }

            }} className='form-input'>
                <input type='text' placeholder='Add note here...' value={note} onChange={(e) => {
                    setNote(e.target.value)
                }} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Input
