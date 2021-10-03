import { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/ContextProvider';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history=useHistory();
  const newPassRef=useRef('');
  const authCtx=useContext(AuthContext);
  const onSubmitHandler = (e) =>{
    e.preventDefault();
    const newPassword=newPassRef.current.value;
    if (newPassword.length<3){
      alert("Password should be >=3");
      return ;
    }
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDz_cfHQ17nBEMcVCtjaKJUirwAFKelldc',{
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx.token,
        password:newPassword,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      if (!res.ok){
        return res.json().then(data=>{
          let errMsg="Authentication Failed!!"
          if (data && data.error && data.error.message){
            errMsg=data.error.message
          }
          return new Error(errMsg);
        })
      }
      else{
        return res.json()
      }
      
    }).then(data=>{
      // console.log('res',res);
      history.replace('/auth');
      authCtx.logout();
      console.log("[data]",data);
    }).catch((err)=>{
      console.log(err);
      alert(err)
    })
  }
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
