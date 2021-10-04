import {createContext, useCallback, useState,useEffect} from 'react';
let loginTimer;
const AuthContext=createContext(
    {
        token:'',
        isLoggedin:null,
        login:()=>{},
        logout: ()=>{}

    }
)
const getRemainingTime= (eTime)=>{
    const currentTime=new Date().getTime();
    const estimateTime=new Date(eTime).getTime();
    const remainingTime=estimateTime-currentTime;
    return remainingTime
}
const retrivedStoredToken = () =>{
    const storedToken=localStorage.getItem('token');
    const storedExpireTime=localStorage.getItem('expireTime');

    const remainingTime=getRemainingTime(storedExpireTime);

    if (remainingTime<=60000){
        localStorage.removeItem('token');
        localStorage.removeItem('expireTime');
        return null;
    }
    return {token:storedToken,duration:remainingTime};
}

export const ContextProvider =(props)=>{
    let initialToken;
    const tokenData=retrivedStoredToken();
    if (tokenData){
        initialToken=tokenData.token;
    }
    
    const [token,setToken]=useState(initialToken);
    const isLoggedin=!!token;
    const logoutHandler= useCallback(()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('expireTime');
        if (loginTimer)
            clearTimeout(loginTimer);
        setToken(null);
    },[]);
    const loginHandler= (token,eTime)=>{
        localStorage.setItem('token',token);
        localStorage.setItem('expireTime',eTime);
        setToken(token);
        const tTime=getRemainingTime(eTime)
        console.log(tTime);
        loginTimer=setTimeout(logoutHandler, tTime);
    }
    useEffect(() => {
        if (tokenData){
            loginTimer=setTimeout(logoutHandler, tokenData.duration);
            console.log(tokenData.duration);
        }
    }, [tokenData,logoutHandler])
    const contextValue={
        token,
        isLoggedin,
        login:loginHandler,
        logout:logoutHandler
    }
    return  <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;