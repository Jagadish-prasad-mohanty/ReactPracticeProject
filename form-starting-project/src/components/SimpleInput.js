import { useState } from "react";
import Input from "./Input";

const SimpleInput = (props) => {
  //input ref by value
  // const nameChangeRef=useRef();

  //name by useState
  const [ name, setName ] = useState("");
  const [ email,setEmail ] =  useState("");
  const [ inputNameTouched, setInputNameTouched ] = useState(false);
  const [ inputEmailTouched, setInputEmailTouched ] = useState(false);

  //value of name by ref
  // const nameR=nameChangeRef.current.value 
  const inputNameValid=name.trim().length !== 0
  const inputNameInValid = inputNameTouched && !inputNameValid
  const inputEmailValid=email.trim().length !== 0 && email.includes('@')
  const inputEmailInValid = inputEmailTouched && !inputEmailValid

  let formIsValid=false;

  if (inputNameValid && inputEmailValid){
    formIsValid=true
  }
  //change handler for name change
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  // change handler for email
  const emailChangeHandler = (event) =>{
    setEmail(event.target.value);
  }
  //code when input lost focus
  const onNameBlurHandler = ()=>{
    setInputNameTouched(true)
  }
  const onEmailBlurHandler = ()=>{
    setInputEmailTouched(true)
  }
  //submit handler when form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInputNameTouched(true);
    setInputEmailTouched(true);
    if (inputNameInValid && inputEmailInValid){
      return;
    }
    setName('')
    setEmail('')
    setInputNameTouched(false)
    setInputEmailTouched(false)
    // console.log(nameR);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <Input
          // ref={nameChangeRef}
          label="Your Name"
          type="text"
          id="name"
          value={name}
          onBlur={onNameBlurHandler}
          onChange={nameChangeHandler}
          notValid={inputNameInValid}
        />
        <Input
          label="Your E-mail"
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={onEmailBlurHandler}
          notValid={inputEmailInValid}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
