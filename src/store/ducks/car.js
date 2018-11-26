export const Types = {
  ADD_ITEM: 'car/ADD_ITEM',
  CHANGE_UNITS: 'car/CHANGE_UNITS',
  REMOVE_ITEM: 'car/REMOVE_ITEM',
};

const initialState = []

export default function filter (state = initialState, action){
  switch(action.type){
    case Types.ADD_ITEM:
      let newState = [];
      let exist = false;
      state.map(product => {
        if (product.item.id===action.payload.item.id){
          exist=true;
          newState.push({item: product.item, units:product.units+1})
        } else {
          newState.push(product)
        }
      });
      if (!exist){
        newState.push({item:action.payload.item, units:1})
      }
      return newState;

    case Types.CHANGE_UNITS:
      let newStateChange = [];
      state.map(product => {
        if (product.item.id===action.payload.productId){
          newStateChange.push({item: product.item, units:action.payload.units})
        } else {
          newStateChange.push(product)
        }
      });

      return newStateChange;

    case Types.REMOVE_ITEM:
      let newStateRemove = [];
      state.map(product => {
        if (product.item.id!==action.payload.productId){
          newStateRemove.push(product)
        }
      });
      return newStateRemove;

    default:
      return state;
  }
};

export const Creators = {
  addItemCar: item => ({
    type: Types.ADD_ITEM,
    payload: { item: item, units:1 }
  }),

  changeUnits: (productId, units) => ({
    type: Types.CHANGE_UNITS,
    payload: { productId: productId, units: units }
  }),

  removeItemCar: (productId) => ({
    type: Types.REMOVE_ITEM,
    payload: { productId: productId }
  }),

};
