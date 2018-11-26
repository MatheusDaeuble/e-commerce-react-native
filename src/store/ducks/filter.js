export const Types = {
  GET_REQUEST: 'filter/GET_REQUEST',
  GET_SUCCESS: 'filter/GET_SUCCESS',
};

const initialState = {
  filter: 1,
  loading: false,
}

export default function filter (state = initialState, action){
  switch(action.type){
    case Types.GET_REQUEST:
      return { filter: action.payload.filter, loading: true };

    case Types.GET_SUCCESS:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export const Creators = {
  getFilterRequest: filter => ({
    type: Types.GET_REQUEST,
    payload: { filter }
  }),

  getFilterSuccess: ()  => ({
    type: Types.GET_SUCCESS,
  })
};
