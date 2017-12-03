// Categories Reducer
const locationsReducerDefaultState = [];

export default (state = locationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [
        ...state,
        action.location
      ];
    case 'REMOVE_LOCATION':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_LOCATION':
      return state.map((location) => {
        return (location.id === action.id) ?
          {
            ...location,
            ...action.updates
          }
          : location;
      });
    case 'RESET':
      return action.payload.locations
    default:
      return state;
  }
};