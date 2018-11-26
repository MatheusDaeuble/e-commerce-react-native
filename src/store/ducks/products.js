export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
};

const initialState = {
  data: ['Boné', 'Camisax', 'Tenis'],
  loading: false,
}

export default function products (state = initialState, action){
  switch(action.type){
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return { data: action.payload.data, loading: false };

    default:
      return state;
  }
};

export const Creators = {
  getProductsRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getProductsSuccess: data  => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  })
};
