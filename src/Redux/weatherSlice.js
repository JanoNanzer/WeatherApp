import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    cities: [],
    allCities: [],
    cityDetail: {},
  },
  reducers: {
    getCities: (state, action) => {
      state.cities = [...state.cities, action.payload];
    },
    deleteCity: (state, action) => {
      state.cities = state.cities.filter((e) => e.name !== action.payload);
    },
    setDetail: (state, action) => {
      state.cityDetail = state.cities.find((c) => c.id === parseInt(action.payload));
    },
    setEmptyDetail: (state) => {
      state.cityDetail = {};
    },
  },
});

export const { getCities, deleteCity, setDetail, setEmptyDetail } =
  weatherSlice.actions;

export default weatherSlice.reducer;
