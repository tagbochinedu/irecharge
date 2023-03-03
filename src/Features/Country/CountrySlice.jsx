import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const COUNTRY_URL =
  "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json";

const initialState = [];

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    try {
      const response = await axios.get(COUNTRY_URL);
      return [...response.data];
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

const CountrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        let result = action.payload;
        let countries = [];

        for (let i = 0; i < result.length-2; i++) {
          if (result[i].country !== result[i + 1].country) {
            countries.push(result[i].country);
          }
        }
        return countries;
      })
      .addCase(fetchCountries.pending, (state, action) => {
        console.log(state.countries, "pending");
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        console.log(state, "rejected");
      });
  },
});
export const selectAllCountries = (state) => state.countries;
export default CountrySlice.reducer;
