import { createSlice } from '@reduxjs/toolkit';

const listCollectionSlice = createSlice({
  name: 'listCollection',
  initialState: [
    { id: 1, name: 'Collection 1', requests: [], selectedRequest: null },
    { id: 2, name: 'Collection 2', requests: [], selectedRequest: null },
  ],
  reducers: {
    saveCollectionToList: (state, action) => {
      state = action.payload;
    },
    saveRequestToCollection: (state, action) => {
      const collection = state.find((collection) => collection.id === 1);
      state.requests.push(action.payload);
    },
  },
});

export const { saveCollectionToList, selectRequest } =
  listCollectionSlice.actions;

export default listCollectionSlice;
