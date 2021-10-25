import {configureStore} from "@reduxjs/toolkit";
import smartThingsSlice from "./smartThingsSlice";


export default configureStore({
    reducer: {
        smartThings: smartThingsSlice
    },
})

