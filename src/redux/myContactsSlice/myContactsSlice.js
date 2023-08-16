import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk,addContactThunk,deleteContactThunk } from 'redux/AsyncThunk/AsyncThunk';

 export const myContactsSlice = createSlice({
    name: 'contacts',
     initialState: {
    items: [],
    isLoading: false,
    error: null
  },
   extraReducers: {
    [fetchContactsThunk.pending](state) {
      state.isLoading = true;
    },
    [fetchContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContactsThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
       },
       [addContactThunk.pending](state) {
      state.isLoading = true;
    },
    [addContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContactThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
       },
      [deleteContactThunk.pending](state) {
      state.isLoading = true;
    },
    [deleteContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [deleteContactThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
       },
  },
})

// export const persistedReducer = persistReducer(persistConfig, myContactsSlice.reducer)

// export const { add, remove } = myContactsSlice.actions;

// export const getContacts = state => state.contacts.items;
// const persistConfig = {
//   key: 'contacts',
//   storage,
// }