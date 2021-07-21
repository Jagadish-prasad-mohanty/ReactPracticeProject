import React from 'react'

function Input(props) {
    const inputClass=props.notValid?"form-control invalid":"form-control";
    let errorText=`${props.id} can't be blank`;
    if (props.id==='email'){
        errorText=`Email can't be blank  and should contain a '@'`
    }

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
        
        {props.notValid && <p className='error-text'>{errorText}</p>}
        </div>
    )
}

export default Input
