import { createStore } from 'redux';
const initialState= {counter:0}
const reducerFunction = (state=initialState,action)=>{
    if (action.type=='increment'){
        return {
            counter:state.counter+=1
        }
    }
    else if (action.type=='decrement'){
        return {
            counter:state.counter-=1
        }
    }
    return state

}

const store = createStore(reducerFunction)

export default store