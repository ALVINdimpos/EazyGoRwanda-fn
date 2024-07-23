// reducers/mapReducer.js

const initialState = {
  startLocation: '',
  endLocation: '',
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_START_LOCATION':
      return {
        ...state,
        startLocation: action.payload,
      };
    case 'SET_END_LOCATION':
      return {
        ...state,
        endLocation: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
