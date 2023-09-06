import {configureStore } from '@reduxjs/toolkit';

import uiSlice  from './ui-slice';
import quantityReducer from './quantity'

const store = configureStore({
    reducer: { ui: uiSlice.reducer, quantity: quantityReducer }
})

export default store;