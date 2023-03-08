import { createSlice, nanoid } from "@reduxjs/toolkit";
import transcorp from "../../assets/transcorp.jpg";

const initialState = {
  hotels: [
    {
      id: "1",
      name: "Transcorp Hilton",
      rating: 2,
      country: "Nigeria",
      image: transcorp,
    },
    {
      id: "2",
      name: "Transcorp Hilton",
      rating: 2,
      country: "Nigeria",
      image: transcorp,
    },
  ],
};

const HotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addHotels: {
      reducer(state, action) {
        state.hotels.push(action.payload);
      },
      prepare(name) {
        const capitalName =
          name.name.charAt(0).toUpperCase() + name.name.slice(1);
        return {
          payload: {
            id: nanoid(),
            name: capitalName,
            country: name.country,
            rating: name.rating,
            image: name.image,
          },
        };
      },
    },
    editHotels: (state, action) =>{
        const hotelList = state.hotels.filter(
          (hotel) => hotel.id !== action.payload.id
        );
        state.hotels = [...hotelList, action.payload];
    },
    deleteHotels: (state, action) => {
      state.hotels = state.hotels.filter((hotel) => {
        return hotel.id !== action.payload;
      });
    },
  },
});

export const selectAllHotels = (state) => state.hotels.hotels;

export const { addHotels, editHotels, deleteHotels } = HotelSlice.actions;


export default HotelSlice.reducer;
