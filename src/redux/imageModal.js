import { createSlice } from '@reduxjs/toolkit';

/** 액션 */
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = ({ src, alt }) => ({
  type: SHOW_MODAL,
  src,
  alt,
});
export const hideModal = () => ({ type: HIDE_MODAL });


const { reducer: imageModalReducer } = createSlice({
  name: 'imageModal',
  initialState: {
    modalVisible: false,
    src: '',
    alt: '',
  },
  reducers: {},
  extraReducers: {
    SHOW_MODAL: (state, action) => 
      ({...state, modalVisible: true, src: action.src, alt: action.alt })
    ,
    HIDE_MODAL: state =>  
    ({...state, modalVisible: false, })
  },
});

export default imageModalReducer;
