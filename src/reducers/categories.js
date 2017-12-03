// Categories Reducer
const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        action.category
      ];
    case 'REMOVE_CATEGORY':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_CATEGORY':
      return state.map((category) => {

        return (category.id === action.id) ?
          {
            ...category,
            ...action.updates
          }
          : category;
      });
    case 'RESET':
      return action.payload.categories
    default:
      return state;
  }
};