import React from 'react'
import { maxPasswordLength, minPasswordLength, stepPasswordLength } from '../constants/number-values-constants';


const Selectors = ({ range, setRange }) => {

    function setValue(val) {
        setRange(val.target.value);
    }

    return (
        <div className='selectors'>
            <div className='container'>
                <div className="selectors-length-value">
                    <span>Password Length</span>
                    <span>{range}</span>
                </div>
                <input
                    className="green-slider"
                    type="range"
                    min={minPasswordLength}
                    max={maxPasswordLength}
                    step={stepPasswordLength}
                    value={range}
                    onChange={val => setValue(val)}>
                </input>
            </div>
        </div>
    )
}

export default Selectors