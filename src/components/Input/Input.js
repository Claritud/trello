import React from 'react';
import './Input.scss';

const Input = ({inputText, onChange, value}) => (
    <input 
    className='input'
    type='textarea'
    onChange={onChange}
    value={value}
    placeholder={inputText}/>
)

export default Input;