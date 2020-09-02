import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import examReducer from './exam/exam.reducer';
import directoryReducer from './directory/directory.reducer';
import locationReducer from './location/location.reducer';
import authReducer from './auth/auth.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  exam: examReducer,
  directory: directoryReducer,
  location: locationReducer,
  auth: authReducer
});

export default persistReducer(persistConfig, rootReducer);
