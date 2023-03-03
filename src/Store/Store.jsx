import { configureStore, combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer} from "redux-persist";
import CountriesReducer from "../Features/Country/CountrySlice";
import HotelReducer from "../Features/Hotels/HotelSlice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  countries: CountriesReducer,
  hotels: HotelReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
