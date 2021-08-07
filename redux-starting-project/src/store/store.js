import { createStore } from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialState= {counter:0,toggle:false}
const counterSlice= createSlice({
    name:'Counter',
    initialState,
    reducer:{
        increment:(state)=>{
            state.counter++
        },
        decrement:(state)=>{
            state.counter--
        },
        increment_5:(state,action)=>{
            state.counter+=action.value
        },
        decrement_5:(state,action)=>{
            state.counter-=action.value
        }
        ,toggle:(state)=>{
            state.toggle=!state.toggle
        }
    }
})

const store= configureStore({
    reducer:createSlice.reducer
})
// const reducerFunction = (state=initialState,action)=>{
//     if (action.type=="toggle"){
//         return {
//             ...state,
//             toggle:!state.toggle
//         }
//     }
//     else if (action.type=='increment'){
//         return {
//             counter:state.counter+=1,
//             ...state
//         }
//     }
//     else if (action.type=='increment_5'){
//         return {
//             counter:state.counter+=action.value,
//             ...state
//         }
//     }
//     else if (action.type=='decrement_5'){
//         return {
//             counter:state.counter-=action.value,
//             ...state
//         }
//     }
//     else if (action.type=='decrement'){
//         return {
//             counter:state.counter-=1,
//             ...state
//         }
//     }
//     return state

// }

// const store = createStore(reducerFunction)

export default store