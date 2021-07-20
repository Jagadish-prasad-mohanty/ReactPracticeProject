import React from 'react'

function Input(props) {
    const inputClass=props.notValid?"invalid":"";
    return (
        <div className={inputClass}>
            <label htmlFor={props.id}>{props.label}</label>
        <input
          // ref={nameChangeRef}
          className={inputClass}
          type={props.type}
          id={props.id}
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />
        
        {props.notValid && <p className='error-text'>{props.id} can't be blank 
        {props.id==='email'?' and should contain a "@"':null}</p>}
        </div>
    )
}

export default Input
