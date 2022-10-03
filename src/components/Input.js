import React from 'react'

const Input = ({ password }) => {
    return (
        <div className='password-generator-main__input-container'>
            <input className="password-generator-main__input-input" type="text" value={password}></input>
            <button className="password-generator-main__input-button">COPY</button>
        </div>
    )
}

export default Input