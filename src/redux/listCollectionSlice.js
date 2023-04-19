import { createSlice } from '@reduxjs/toolkit';

const listCollectionSlice = createSlice({
  name: 'listCollection',
  initialState: [
    { id: 1, name: 'Collection 1', requests: [], selectedRequest: null },
    { id: 2, name: 'Collection 2', requests: [], selectedRequest: null },
  ],
  reducers: {
    saveCollectionToList: (state, action) => {
      const collectionIndex = state.findIndex(
        (collection) => collection.id === 1
      );
      state[collectionIndex].requests.push(action.payload);
    },
  },
});

export const { saveCollectionToList } = listCollectionSlice.actions;

export default listCollectionSlice;
