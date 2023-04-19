import { configureStore } from '@reduxjs/toolkit';
import requestSlice from './requestSlice';
import collectionSlice from './collectionSlice';
import listCollectionSlice from './listCollectionSlice';

const store = configureStore({
  reducer: {
    request: requestSlice.reducer,
    collection: collectionSlice.reducer,
    listCollection: listCollectionSlice.reducer,
  },
});

export default store;
