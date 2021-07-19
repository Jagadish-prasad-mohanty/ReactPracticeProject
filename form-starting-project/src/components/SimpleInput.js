import { useRef, useState } from "react";

const SimpleInput = (props) => {
  //input ref by value
  const nameChangeRef=useRef();

  //name by useState
  const [ name, setName ] = useState("");
  const [ inputNameValid, setInputNameValid ] =useState(false);
  const [ inputNameTouched, setInputNameTouched ] = useState(false)

  //value of name by ref
  // const nameR=nameChangeRef.current.value 

  //change handler for input change
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const inputNameInValid = inputNameTouched && !inputNameValid

  //submit handler when form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInputNameTouched(true);
    if (name.trim().length === 0){
      setInputNameValid(false)
      return;
    }
    setInputNameValid(true)
    console.log(name);
    // console.log(nameR);
  };
  const formClass=inputNameInValid?"form-control invalid":"form-control"
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameChangeRef}
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
        />
      </div>
      {inputNameInValid && <p className='error-text'>Name can't be blank</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
