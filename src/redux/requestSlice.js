// requestsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const requestSlice = createSlice({
  name: 'request',
  initialState: { json: '', body: '' },
  reducers: {
    updateJson: (state, action) => {
      state.json = action.payload;
    },
    updateBody: (state, action) => {
      state.body = action.payload;
    },
  },
});

export const { updateJson, updateBody } = requestSlice.actions;

export default requestSlice;
