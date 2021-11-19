import {useEffect, useState} from 'react';

let globalState={};
let actions=[];
let leverages=[]

export const useStore = () =>{
    const setState =useState(globalState)[1];

    const dispatch = (actionIdentifier,payload)=>{
        console.log("hi");
        console.log(actions[actionIdentifier])
        const newState=actions[actionIdentifier](globalState,payload);
        globalState={...globalState,...newState}
        console.log(globalState)
        // return globalState
    }
    useEffect(()=>{
        leverages.push(setState);

        return ()=>{
            leverages.filter(lev=>lev!==setState)
        }
    },[setState])
    return [globalState,dispatch]
}


export const initStore= (initialState,initialActions) =>{
    globalState={...globalState,...initialState};
    actions={...actions,...initialActions}

}