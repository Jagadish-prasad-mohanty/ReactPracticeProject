const redux=require('redux');

const initialState={counter:0}

const reducerFunction= (state=initialState,action)=>{
    if (action.type=='increment'){
        return {counter:state.counter+=1}
    }
    else if (action.type=='decrement'){
        return {counter:state.counter-=1}
    }
    return state
}

const store = redux.createStore(reducerFunction);

const counterSubscriber= () =>{
    const curState=store.getState();
    console.log(curState);
}


store.subscribe(counterSubscriber);

store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})
