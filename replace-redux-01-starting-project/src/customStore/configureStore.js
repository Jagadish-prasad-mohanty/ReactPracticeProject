import {initStore} from './store'
const DEMO_state={
    products: [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }
    ]
  };
const ConfigureStore =()=>{
    initStore(DEMO_state,{
        TOGGLE_FEV:(state,productId)=>{
            const prodIndex = state.products.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !state.products[prodIndex].isFavorite;
              const updatedProducts = [...state.products];
              updatedProducts[prodIndex] = {
                ...state.products[prodIndex],
                isFavorite: newFavStatus
              };
              return {
                ...state,
                products: updatedProducts
              };
        }
    })
}

export default ConfigureStore;