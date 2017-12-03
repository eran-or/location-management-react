// Filters Reducer
const filtersReducerDefaultState = {
  sortOrder: '',
  groupedByCategory: false,
  category: '',
  sortCategoriesOrder:false,
  centerFooter:false
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'GROUPED_BY_CATEGORY':
      return {
        ...state,
        groupedByCategory: action.isGrouped
      }
    case 'SET_SORT_ORDER':
      return {
        ...state,
        sortOrder: action.order
      }
    case 'SELECT_ONE_CATEGORY':
      return {
        ...state,
        category: action.category
      }
    case 'SET_CATEGORIES_SORT_ORDER':
      return {
        ...state,
        sortCategoriesOrder: action.order
      }
      case 'CENTER_FOOTER':
      return {
        ...state,
        centerFooter: action.centerFooter
      }
    case 'RESET':
      return action.payload.filters
    default:
      return state;
  }
};
