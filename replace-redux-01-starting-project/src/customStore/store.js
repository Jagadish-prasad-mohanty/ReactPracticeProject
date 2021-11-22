import {useEffect, useState} from 'react';

let globalState={};
let actions=[];
let listners=[]

export const useStore = (shouldListner = true) =>{
    const setState =useState(globalState)[1];

    const dispatch = (actionIdentifier,payload)=>{
        // console.log("hi");
        // console.log(actions[actionIdentifier])
        const newState=actions[actionIdentifier](globalState,payload);
        globalState={...globalState,...newState}
        // console.log(globalState)
        // return globalState
        for (const listner of listners){
            listner(globalState);
        }
    }
    useEffect(()=>{
        if (shouldListner)
        listners.push(setState);

        return ()=>{
            if (shouldListner)
                listners.filter(lev=>lev!==setState)            
        }
    },[setState,shouldListner])
    return [globalState,dispatch]
}


export const initStore= (initialState,initialActions) =>{
    if (initialState){
    globalState={...globalState,...initialState};

    }
    actions={...actions,...initialActions}

}