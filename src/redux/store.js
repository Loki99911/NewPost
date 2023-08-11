import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import productReducer from "./Package/packageReducer";
import {historyReducer} from "./History/historyReducer";
import addressReducer from "./Address/addressReducer";
import warehouseTypeReducer from "./WarehouseType/warehouseTypeReducer";

const productsPersistConfig = {
  key: "package",
  storage,
};

const historyPersistConfig = {
  key: 'history',
  storage,
};

const warehouseTypesPersistConfig = {
  key: 'warehouseTypes',
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

const persistedReducerWarehouseTypes = persistReducer(
  warehouseTypesPersistConfig,
  warehouseTypeReducer
);

export const store = configureStore({
  reducer: {
    packages: persistedReducerProducts,
    history: persistedReducerHistory,
    address: addressReducer,
    warehouseTypes: persistedReducerWarehouseTypes,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
