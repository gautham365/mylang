import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/comments/commentSlice';

const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});

export default store;