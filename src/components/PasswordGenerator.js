import React, { useState } from 'react'
import Checkboxes from './Checkboxes';
import Input from './Input';
import Selectors from './Selectors';
import { uppercaseLetters, lowwercaseLetters, numbersConst, symbolsConst } from '../constants/strings-for-passwords-constants';
import { AppName, generatePasswordButton } from '../constants/text-constants';

export const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [upper, setUpper] = useState(false);
    const [lowwer, setLowwer] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [range, setRange] = useState(6);

    function generatePassword() {
        let possibleCharacters = "";
        let result = ""

        if (upper) {
            possibleCharacters += uppercaseLetters;
        }
        if (lowwer) {
            possibleCharacters += lowwercaseLetters;
        }
        if (numbers) {
            possibleCharacters += numbersConst;
        }
        if (symbols) {
            possibleCharacters += symbolsConst
        }

        for (let i = 0; i < range; i++) {
            result += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
        }

        setPassword(result)
    }

    return (
        <div className="password-generator-main">
            <h3>{AppName}</h3>
            <Input className='password-generator-main__input' password={password} />
            <Selectors range={range} setRange={setRange} />
            <Checkboxes className='password-selectors'
                lowwer={lowwer}
                upper={upper}
                numbers={numbers}
                symbols={symbols}
                setLowwer={setLowwer}
                setUpper={setUpper}
                setSymbols={setSymbols}
                setNumbers={setNumbers}
            />

            <button
                className="generate-password-button"
                onClick={val => generatePassword()}>
                {generatePasswordButton}
            </button>
        </div>
    )
}
