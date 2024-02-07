import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";

const store = configureStore({
    reducer: {
        UserDetails : UserSlice
    },
  });
  
  export default store;