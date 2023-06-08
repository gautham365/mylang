import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeStars: 0,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating: (state, action) => {
      state.activeStars = action.payload;
    },
  },
});

export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;