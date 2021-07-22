import { useReducer } from "react";

const initialInputState={
  value:'',
  inputTouched:false
}

const inputStateReducer = (state,action) =>{
  if (action.type==='INPUT'){
    return {value:action.value, inputTouched:state.inputTouched}
  }
  if (action.type==="BLUR"){
    return {value:state.value, inputTouched:true}
  }
  if(action.type==="RESET"){
    return {value:'',inputTouched:false}
  }
  return initialInputState
}

const useInput = (checkValidity) => {
  const [inputState,dispatch] = useReducer(inputStateReducer,initialInputState);
  // const [inputValue, setInputValue] = useState("");
  // const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = checkValidity(inputState.value);
  const inputHasError = !inputIsValid && inputState.inputTouched;

  const onInputChangeHandler = (e) => {
    dispatch({type:'INPUT',value:e.target.value})
    // setInputValue(e.target.value);
  };
  const onInputBlurHandler = () => {
    dispatch({type:'BLUR'})
    // setInputTouched(true);
  };
  const reset= ()=>{
    dispatch({type:'RESET'})
      // setInputValue("")
      // setInputTouched(false)
  }

  return {
    inputValue:inputState.value,
    inputIsValid,
    inputHasError,
    onInputChangeHandler,
    onInputBlurHandler,
    reset
  };
};

export default useInput;
