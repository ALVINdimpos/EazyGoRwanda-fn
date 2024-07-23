// actions/mapActions.js

export const setStartLocation = location => ({
  type: 'SET_START_LOCATION',
  payload: location,
});

export const setEndLocation = location => ({
  type: 'SET_END_LOCATION',
  payload: location,
});
