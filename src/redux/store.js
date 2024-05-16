import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { eventsReducer } from "./events/eventsSlice";
import { authReducer } from "./auth/authSlice";

const eventsPersistConfig = {
  key: "data",
  storage,
  whitelist: ["events", "limitedEvents"],
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["user", "token"],
};

const rootReducer = combineReducers({
  data: persistReducer(eventsPersistConfig, eventsReducer),
  user: persistReducer(userPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
