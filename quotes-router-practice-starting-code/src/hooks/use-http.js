import { useReducer, useCallback } from 'react';

// function httpReducer(state, action) {
//   if (action.type === 'SEND') {
//     return {
//       data: null,
//       error: null,
//       status: 'pending',
//     };
//   }

//   if (action.type === 'SUCCESS') {
//     return {
//       data: action.responseData,
//       error: null,
//       status: 'completed',
//     };
//   }

//   if (action.type === 'ERROR') {
//     return {
//       data: null,
//       error: action.errorMessage,
//       status: 'completed',
//     };
//   }

//   return state;
// }

// function useHttp(requestFunction, startWithPending = false) {
//   const [httpState, dispatch] = useReducer(httpReducer, {
//     status: startWithPending ? 'pending' : null,
//     data: null,
//     error: null,
//   });

//   const sendRequest = useCallback(
//     async function (requestData) {
//       dispatch({ type: 'SEND' });
//       try {
//         const responseData = await requestFunction(requestData);
//         dispatch({ type: 'SUCCESS', responseData });
//       } catch (error) {
//         dispatch({
//           type: 'ERROR',
//           errorMessage: error.message || 'Something went wrong!',
//         });
//       }
//     },
//     [requestFunction]
//   );

//   return {
//     sendRequest,
//     ...httpState,
//   };
// }

// export default useHttp;

const reducerFunction =(state,action)=>{
  if (state.action==='SEND'){
    return {
      data:null,
      status:'pending',
      error:null
    }
  }
  else if (state.action==='SUCCESS'){
    return {
      data:action.responseData,
      status:'completed',
      error:null
    }
  }
  else if (state.action==='ERROR'){
    return {
      data:null,
      status:'completed',
      error:action.errorMessage
    }
  }
}
const useHttp= (requestFunction ,startWithPending=false) =>{
  const [httpState,dispatch] =useReducer(reducerFunction,{
    data:null,
    status:startWithPending?'pending':null,
    error:null
  })
  const sendRequest= useCallback( async (reqData) =>{
    dispatch({type:'SEND'});
    try {
      const responseData= await requestFunction(reqData);
      dispatch({type:'SUCCESS', responseData})
    } catch (error) {
      dispatch({type:'ERROR',errorMessage:error.message || 'Something went wrong'})
    }
  },[requestFunction])

  return {
    sendRequest,
    ...httpState
  }
}


export default useHttp;