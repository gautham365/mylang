import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../features/cards/cardSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;