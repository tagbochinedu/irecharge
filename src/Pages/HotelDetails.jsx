import React from "react";
import { selectAllHotels, deleteHotels } from "../Features/Hotels/HotelSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import Rating from "../Components/Rating";

const HotelDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const hotels = useSelector(selectAllHotels);
  const hotel = hotels.filter((hotel) => hotel.id === id);

  const deleteHandler = () => {
    dispatch(deleteHotels(id));
    console.log(hotels)
    navigate('/')
    
  };

  return (
    <div className="px-5 max-w-4xl mx-auto py-10">
      {hotel.map((hotel) => (
        <div key={hotel.id} className="">
          {" "}
          <img
            src={hotel.image}
            alt={hotel.name}
            className="aspect-video object-cover w-full"
          />
          <div className="">
            <div className="px-2 py-5">
              <h5 className="font-semibold text-xl">{hotel.name}</h5>
              <Rating rating={hotel.rating} />
              <h5 className="font-regular text-lg">{hotel.country}</h5>
            </div>
          </div>
        </div>
      ))}
      <div className="md:flex">
        <div className="w-full md:w-6/12 md:mr-2">
          <Link to={`/hotel/${id}/edit`} className="mx-auto">
            <p className="mb-2 md:mb-0 bg-irecharge text-center py-3 text-lg text-white hover:bg-irecharge2 active:bg-irecharge rounded-sm">
              Edit Details
            </p>
          </Link>
        </div>
        <button
          className=" md:ml-2 w-full md:w-6/12 bg-red-700 text-center py-3 text-lg text-white hover:bg-red-600 active:bg-red-700 rounded-sm"
          type="button"
          onClick={deleteHandler}
        >
          Delete Hotel
        </button>
      </div>
    </div>
  );
};

export default HotelDetails;
