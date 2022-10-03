import React from 'react'

const Checkbox = ({ value, state, text }) => {

    function changeState() {
        state(!value)
    }

    return (
        <div className="checkboxes-label">
            <input
                className='checkbox'
                type="checkbox"
                defaultChecked={value}
                onChange={val => changeState()}
            />
            <label>{text}</label>
        </div>
    )
}

export default Checkbox