import { useState ,useRef, useContext} from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/ContextProvider';
import { useHistory } from 'react-router';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const authCtx=useContext(AuthContext);

  const emailRef=useRef();
  const passRef=useRef();
  const [isLoading,setIsLoading]=useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const history=useHistory();
  const submitFormHandler= (e) =>{
    e.preventDefault();
    
    const enteredEmail=emailRef.current.value;
    const enteredPassword=passRef.current.value;
    // console.log("hi");
    setIsLoading(true);
    let url;
    if (isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDz_cfHQ17nBEMcVCtjaKJUirwAFKelldc';
    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDz_cfHQ17nBEMcVCtjaKJUirwAFKelldc'
    }
    fetch(url,{
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
      headers:{
      'Content-Type': 'application/json'
    },
    }).then(res=>{
      setIsLoading(false);
      if (res.ok){
        console.log("res ok");
        return res.json();
      }else{
        return res.json().then(data=>{
          let errorMessage='Authentication Failed!!'
          if (data && data.error && data.error.message){
            // console.log(data.error.message);
            errorMessage=data.error.message
          }
          throw new Error(errorMessage)
        });
      }
    }).then((data)=>{
      console.log(data);
      // localStorage.setItem('token',data.idToken);
      if (!isLogin){
        console.log(isLogin);
        setIsLogin(true);
        if (data && data.idToken)
        history.replace('/auth')
        return;
      }
      // console.log(data.expiresIn);
      // authCtx.login(data.idToken,data.expiresIn);
      const estimateTime=new Date(new Date().getTime()+(+data.expiresIn)*1000)
      authCtx.login(data.idToken,estimateTime.toISOString());
      
      // alert("Success");
      history.replace('/')
    }).catch((err)=>{
      console.log("ere");
      alert(err.message)
          console.log("[err]",err.message);
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading?<button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>:"Sending..."}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
