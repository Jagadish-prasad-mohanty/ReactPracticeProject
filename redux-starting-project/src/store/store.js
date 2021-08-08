import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, toggle: false };
const counterSlice = createSlice({
  name: "counter",
  initialState:  initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increment_5: (state, action) => {
      state.counter += action.payload;
    },
    decrement_5: (state, action) => {
      state.counter -= action.payload;
    },
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
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
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
