import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./inventory-slice";

const store = configureStore({
  reducer: {
    inventory: inventorySlice.reducer,
  },
});

export default store;
