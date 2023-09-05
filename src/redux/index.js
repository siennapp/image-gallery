import { combineReducers } from "@reduxjs/toolkit";
import imagesReducer from "./images";
import imageModalReducer from './imageModal';
const rootReducer = combineReducers({
    images: imagesReducer,
    imageModal: imageModalReducer
})

export default rootReducer;