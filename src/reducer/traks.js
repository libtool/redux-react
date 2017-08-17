const initialState = [  {
    id: 2334,
    name: 'Super track'
  }];

export default function traks(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  } else if (action.type === 'FETCH_TRACK_SUCESS') {
    return action.payload;
  }
  return state;
}
