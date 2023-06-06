import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
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
    setCardLength: (state, action) => {
        const { amount } = action.payload;
        state.cards = Array.from({ length: amount }, () => 'down');
        console.log(amount);
    },
  },
});

export const { flipCard, setCardLength } = cardsSlice.actions;
export default cardsSlice.reducer;