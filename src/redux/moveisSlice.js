import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    movieId,
    movieName,
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    SET_NAME: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { SET_NAME } = profileSlice.actions;
export default moviesSlice.reducer;
