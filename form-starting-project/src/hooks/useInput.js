import { useState } from "react";

const useInput = (checkValidity) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = checkValidity(inputValue);
  const inputHasError = !inputIsValid && inputTouched;

  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onInputBlurHandler = () => {
    setInputTouched(true);
  };
  const reset= ()=>{
      setInputValue("")
      setInputTouched(false)
  }

  return {
    inputValue,
    inputTouched,
    inputIsValid,
    inputHasError,
    onInputChangeHandler,
    onInputBlurHandler,
    reset
  };
};

export default useInput;
