import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import contactReducer from "./Slice/contactSlice";

const appStore = configureStore({
    reducer:{
      user:userReducer,
      contact:contactReducer
    }
});

export default appStore;