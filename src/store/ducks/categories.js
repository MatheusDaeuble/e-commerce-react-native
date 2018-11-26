export const Types = {
  GET_REQUEST: 'categories/GET_REQUEST',
  GET_SUCCESS: 'categories/GET_SUCCESS',
};

const initialState = {
  data: [],
  loading: false,
}

export default function categories (state = initialState, action){
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
  getCategoriesRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getCategoriesSuccess: data  => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  })
};
