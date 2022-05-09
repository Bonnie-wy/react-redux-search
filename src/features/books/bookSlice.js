import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookSearchApi from "../../common/apis/bookSearchApi";

const initialState = {
  books: {},
  isLoading: false,
  hasError: false,
};

export const fetchBookList = createAsyncThunk(
  "books/fetchBookList",
  async (text) => {
    const response = await bookSearchApi.get(`/resources/works?search=${text}`);

    return response.data;
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBookList.pending]: (state) => {
      return { ...state, books: {}, isLoading: true };
    },
    [fetchBookList.fulfilled]: (state, { payload }) => {
      return { ...state, books: payload, isLoading: false };
    },
    [fetchBookList.rejected]: (state) => {
      return { ...state, books: {}, isLoading: false, hasError: true };
    },
  },
});

export const getAllBooks = (state) => state.books.books;
export default bookSlice.reducer;
