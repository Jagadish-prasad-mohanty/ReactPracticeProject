import {createContext, useState} from 'react';

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
export const ContextProvider =(props)=>{
    const initialToken=localStorage.getItem('token')
    const [token,setToken]=useState(initialToken);
    const isLoggedin=!!token;
    const loginHandler= (token,eTime)=>{
        localStorage.setItem('token',token);
        setToken(token);
        const tTime=getRemainingTime(eTime)
        console.log(tTime);
        setTimeout(logoutHandler, tTime);
    }
    const logoutHandler= ()=>{
        localStorage.removeItem('token');
        setToken(null);
    }
    const contextValue={
        token,
        isLoggedin,
        login:loginHandler,
        logout:logoutHandler
    }
    return  <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;