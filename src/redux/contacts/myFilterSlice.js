import { createSlice } from '@reduxjs/toolkit';

export const myFilterSlice = createSlice({
    name: 'filter',
    initialState: { value: '' },
    reducers: {
        filter(state, {payload}) {
            state.value = payload
            }
    }
})

export const { filter } = myFilterSlice.actions;
