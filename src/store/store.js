import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './users/usersSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { rootReducer } from 'components/root/slice';

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['token', 'profile'],
};
const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistedUserReducer = persistReducer(usersPersistConfig, usersReducer);
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const reducer = {
  users: persistedUserReducer,
  contacts: persistedContactsReducer,
  filter: filterReducer,
  root: rootReducer,
};
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
