
import Input from "./Input";
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  // USING COSTEM HOOK
  //Extracting the name useinput conponnet
  const {
    inputValue: name,
    // inputTouched: inputNameTouched,
    inputIsValid: inputNameValid,
    inputHasError: inputNameInValid,
    onInputChangeHandler: nameChangeHandler,
    onInputBlurHandler: onNameBlurHandler,
    reset:nameReset
  } = useInput((value) => value.trim().length !== 0);

  // extracting the email useinput Component
  const {
    inputValue: email,
    // inputTouched: inputEmailTouched,
    inputIsValid: inputEmailValid,
    inputHasError: inputEmailInValid,
    onInputChangeHandler: emailChangeHandler,
    onInputBlurHandler: onEmailBlurHandler,
    reset:emailReset
  } = useInput((value) => value.includes('@'));


  ///////By Not using costem hooks
  //input ref by value
  // const nameChangeRef=useRef();

  //name by useState
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [inputNameTouched, setInputNameTouched] = useState(false);
  // const [inputEmailTouched, setInputEmailTouched] = useState(false);

  //value of name by ref
  // const nameR=nameChangeRef.current.value
  // const inputNameValid = name.trim().length !== 0;
  // const inputNameInValid = inputNameTouched && !inputNameValid;
  // const inputEmailValid = email.trim().length !== 0 && email.includes("@");
  // const inputEmailInValid = inputEmailTouched && !inputEmailValid;

  let formIsValid = false;

  if (inputNameValid && inputEmailValid) {
    formIsValid = true;
  }
  // //change handler for name change
  // const nameChangeHandler = (event) => {
  //   setName(event.target.value);
  // };
  // // change handler for email
  // const emailChangeHandler = (event) => {
  //   setEmail(event.target.value);
  // };
  // //code when input lost focus
  // const onNameBlurHandler = () => {
  //   setInputNameTouched(true);
  // };
  // const onEmailBlurHandler = () => {
  //   setInputEmailTouched(true);
  // };
  //submit handler when form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // setInputNameTouched(true);
    // setInputEmailTouched(true);
    // if (inputNameInValid && inputEmailInValid) {
    //   return;
    // }

    nameReset();
    emailReset();
    // setName("");
    // setEmail("");
    // setInputNameTouched(false);
    // setInputEmailTouched(false);
    // console.log(nameR);
  };
  return (
    <form onSubmit={onSubmitHandler}>
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
