import {configureStore, createSlice} from '@reduxjs/toolkit'
const initialCartState ={
    toggle:false
}


const cartSlice=createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        toggler:(state)=>{
            state.toggle=!state.toggle
        }
    }
})

const initialPoductsState={
    products:[],
    totalQuantity:0
}

const productsSlice= createSlice({
    name:"products",
    initialState:initialPoductsState,
    reducers:{
        addItem:(state,action)=>{
            const newItem=action.payload
            const reqItem=state.products.find(item=>item.id===newItem.id);
            state.totalQuantity++;
            if (!reqItem){
                state.products.push(newItem)
            }
            else{
                reqItem.quantity++;
                reqItem.total+=newItem.price
            }
        },
        removeItem: (state,action)=>{
            const reqId=action.payload;
            const reqItem=state.products.find(item=>item.id===reqId);
            state.totalQuantity-=1
            if (reqItem.quantity===1){
                state.products=state.products.filter(item=>item.id!==reqId)
            }   
            else{
                reqItem.quantity-=1;
                reqItem.total-=reqItem.price
            }
        }
    }
})

const initialStoreProductState={
    storeProducts:[],
    isLoading:true
}
const storeProductSlice= createSlice({
    name:'storeProduct',
    initialState:initialStoreProductState,
    reducers:{
        addStoreProduct: (state,action)=>{
            const storeProducts=action.payload
            state.storeProducts=storeProducts
        },
        finishLoading:(state)=>{
            state.isLoading=false
        }
    }
})

const store=configureStore({
    reducer:{cart:cartSlice.reducer,products:productsSlice.reducer,storeProducts:storeProductSlice.reducer}
});
export const cartActions= cartSlice.actions;
export const productsActions= productsSlice.actions;
export const storeProductActions=storeProductSlice.actions;
export default store