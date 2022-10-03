import React from 'react'
import Checkbox from './Checkbox'
import {uppercase, symbolsName, lowercase, numbersName } from '../constants/checkbox-names-constants'

const Checkboxes = ({ upper, symbols, number, lowwer, setUpper, setLowwer, setNumbers, setSymbols }) => {

    return (
        <div className="checkboxes">
            <Checkbox value={upper} state={setUpper} text={uppercase} />
            <Checkbox value={lowwer} state={setLowwer} text={lowercase} />
            <Checkbox value={number} state={setNumbers} text={numbersName} />
            <Checkbox value={symbols} state={setSymbols} text={symbolsName} />
        </div>
    )
}

export default Checkboxes