import useInput from "../hooks/useInput";
import Input from "./Input";
const BasicForm = (props) => {
  const {
    inputValue: fName,
    inputIsValid: fNameIsValid,
    inputHasError: fNameIsInValid,
    onInputChangeHandler: fNameChangeHandler,
    onInputBlurHandler: onFNameBlurHandler,
    reset: fNameReset,
  } = useInput((value) => value.trim().length !== 0);
  const {
    inputValue: lName,
    inputIsValid: lNameIsValid,
    inputHasError: lNameIsInValid,
    onInputChangeHandler: lNameChangeHandler,
    onInputBlurHandler: onLNameBlurHandler,
    reset: lNameReset,
  } = useInput((value) => value.trim().length !== 0);
  const {
    inputValue: email,
    inputIsValid: emailIsValid,
    inputHasError: emailIsInValid,
    onInputChangeHandler: emailChangeHandler,
    onInputBlurHandler: onEmailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

    //form validation
  let formIsValid = false;

  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  //submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //using reset for each input
    fNameReset();
    lNameReset();
    emailReset();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <Input
          label="First Name"
          id="fname"
          type="text"
          value={fName}
          onBlur={onFNameBlurHandler}
          onChange={fNameChangeHandler}
          notValid={fNameIsInValid}
        />
        <Input
          label="Last Name"
          id="lname"
          type="text"
          value={lName}
          onBlur={onLNameBlurHandler}
          onChange={lNameChangeHandler}
          notValid={lNameIsInValid}
        />
        <Input
          label="E-mail Address"
          id="email"
          type="email"
          value={email}
          onBlur={onEmailBlurHandler}
          onChange={emailChangeHandler}
          notValid={emailIsInValid}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
