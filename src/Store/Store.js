// import { configureStore } from "@reduxjs/toolkit";
// import CounterReducer from "../Reducers/CounterReducer";
// const store = configureStore({
//     reducer : CounterReducer
// })
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import  TodoReducer from "../Reducers/TodoReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, TodoReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  const persistor = persistStore(store);
  
export  {store , persistor}