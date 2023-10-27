import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieId: "",
  movieName: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.movieId = action.payload;
    },
    setMovieName: (state, action) => {
      state.movieName = action.payload;
    },
  },
});

export const { setId, setMovieName } = profileSlice.actions;
export default moviesSlice.reducer;
