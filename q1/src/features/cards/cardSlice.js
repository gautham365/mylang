import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: Array.from({ length: amount }, () => 'down'),
  activeIndex: -1,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    flipCard: (state, action) => {
      const { index } = action.payload;
      state.cards = state.cards.map((card, i) =>
        i === index ? 'up' : 'down'
      );
      state.activeIndex = index;
    },
  },
});

export const { flipCard } = cardsSlice.actions;
export default cardsSlice.reducer;