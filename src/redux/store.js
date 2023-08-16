import { configureStore, applyMiddleware  } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { myContactsSlice } from './myContactsSlice/myContactsSlice';
import { myFilterSlice } from './myFilterSlice/myFilterSlice';

export const store = configureStore({
    reducer: {
        contacts: myContactsSlice.reducer,
        filter: myFilterSlice.reducer,
    },
   }, applyMiddleware(thunk))


