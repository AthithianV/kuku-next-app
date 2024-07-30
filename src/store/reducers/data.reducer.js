import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import app_data from "./../../application.json";

const initialState = {
  data: [],
  moreData: [],
  loader: false,
  mixed_items: [],
  banners: [],
  error: false,
};

const url = app_data.api.root_url;

export const getData = createAsyncThunk("data/get", async () => {
  try {
    const res = await axios.get(url + "/home/all");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const fetchMoreData = createAsyncThunk(
  "data/fetchMore",
  async (mixed_items) => {
    try {
      const res = await axios.get(url + mixed_items[0].uri);
      return { title: mixed_items[0].title, content: res.data.cu_shows };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    removeError: (state, action)=>{
      state.error = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.data = [];
        state.data.push({
          title: "Top 10 India",
          content: items[3].mixed_content_items,
        });
        state.data.push({ title: items[4].title, content: items[4].shows });
        state.mixed_items = action.payload.items[1].mixed_items;
        state.banners = action.payload.items[0].banners;
        state.loader = false;
      })
      .addCase(getData.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getData.rejected, (error, state, action) => {
        console.log(error);
        state.loader = false;
        state.error = true;
      })
      .addCase(fetchMoreData.fulfilled, (state, action) => {
        state.moreData.push(action.payload);
        state.mixed_items.shift();
      })
      .addCase(fetchMoreData.rejected, (state, action) => {
        state.loader = false;
        state.error = true;
      });
  },
});

export const dataReducer = dataSlice.reducer;
export const dataAction = dataSlice.actions;
export const dataSelector = (state) => state.dataReducer;
