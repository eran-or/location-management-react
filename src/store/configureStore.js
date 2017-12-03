import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import categoriesReducer from '../reducers/categories';
import locationsReducer from '../reducers/locations';
import filtersReducer from '../reducers/filters';
import stateRecovery from '../middlewares/stateRecovery';
export default () => {
  //Store cretion
  const store = createStore(
    combineReducers({
      categories: categoriesReducer,
      locations: locationsReducer,
      filters: filtersReducer
    }),
    compose(
      applyMiddleware(
        stateRecovery
      ),
      (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
  return store;
};