import { combineReducers } from 'redux';

import bookReducer from './books/reducer';

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
