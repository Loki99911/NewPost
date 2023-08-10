import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import productReducer from "./Package/packageReducer";
import {historyReducer} from "./History/historyReducer";
import addressReducer from "./Address/addressReducer";

const productsPersistConfig = {
  key: "package",
  storage,
};

const historyPersistConfig = {
  key: 'history',
  storage,
};

const addressPersistConfig = {
  key: 'address',
  storage,
};

const persistedReducerProducts = persistReducer(
  productsPersistConfig,
  productReducer
);

const persistedReducerHistory = persistReducer(
  historyPersistConfig,
  historyReducer
);

const persistedReducerAddress = persistReducer(
  addressPersistConfig,
  addressReducer
);

export const store = configureStore({
  reducer: {
    packages: persistedReducerProducts,
    history: persistedReducerHistory,
    address: persistedReducerAddress,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
