import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import option from './option';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({ option });

export default persistReducer(persistConfig, rootReducer);
