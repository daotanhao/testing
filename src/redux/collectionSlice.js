import { createSlice } from '@reduxjs/toolkit';

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    requests: [],
    selectedRequest: null, // Thêm trường selectedRequest vào state của collectionSlice
  },
  reducers: {
    saveRequestToCollection: (state, action) => {
      state.requests.push(action.payload);
    },
    selectRequest: (state, action) => {
      // Cập nhật selectedRequest với request được chọn
      state.selectedRequest = action.payload;
    },
  },
});

export const { saveRequestToCollection, selectRequest } =
  collectionSlice.actions;

export default collectionSlice;
