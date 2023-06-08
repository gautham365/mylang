import { configureStore } from '@reduxjs/toolkit';
import ratingReducer from '../features/rating/ratingSlice';

const store = configureStore({
  reducer: {
    rating: ratingReducer,
  },
});

export default store;