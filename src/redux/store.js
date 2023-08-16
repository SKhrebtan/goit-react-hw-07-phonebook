import { configureStore, applyMiddleware  } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { myContactsSlice } from './contacts/myContactsSlice';
import { myFilterSlice } from './contacts/myFilterSlice';

export const store = configureStore({
    reducer: {
        contacts: myContactsSlice.reducer,
        filter: myFilterSlice.reducer,
    },
   }, applyMiddleware(thunk))


