import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
});

export default store;