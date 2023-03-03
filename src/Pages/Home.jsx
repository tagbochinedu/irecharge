import { useState } from "react";
import { Link } from "react-router-dom";
import { selectAllHotels } from "../Features/Hotels/HotelSlice";
import { useSelector } from "react-redux";
import Rating from "../Components/Rating";

const Home = () => {
  const hotels = useSelector(selectAllHotels);
  const [oneStar, setOneStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [all, setAll] = useState(true);
  const [Hotel, setHotel] = useState(hotels);

  const onestar = () => {
    setAll(false);
    setOneStar(true);
    setTwoStar(false);
    setThreeStar(false);
    setHotel(hotels.filter((hotel) => hotel.rating === 1));
  };
  const allstars = () => {
    setAll(true);
    setOneStar(false);
    setTwoStar(false);
    setThreeStar(false);
    setHotel(hotels);
  };
  const threestar = () => {
    setAll(false);
    setOneStar(false);
    setTwoStar(false);
    setThreeStar(true);
    setHotel(hotels.filter((hotel) => hotel.rating === 3));
  };
  const twostar = () => {
    setAll(false);
    setOneStar(false);
    setTwoStar(true);
    setThreeStar(false);
    setHotel(hotels.filter((hotel) => hotel.rating === 2));
  };

  return (
    <>
      <section className="px-4 md:px-5 max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold py-5 md:py-10">
          Hotels
        </h2>
        <div className="flex justify-center mb-5 md:mb-10">
          <span
            onClick={allstars}
            className={`text-md md:text-xl border-b-[2px] cursor-pointer w-16 md:w-28 text-center py-2 transition-all ease-in-out duration-500 ${
              all ? "border-red-400" : "border-gray-400"
            }`}
          >
            All
          </span>
          <span
            onClick={onestar}
            className={`text-md md:text-xl border-b-[2px] cursor-pointer w-20 md:w-28 text-center py-2 transition-all ease-in-out duration-500 ${
              oneStar ? "border-red-400" : "border-gray-400"
            }`}
          >
            One Star
          </span>
          <span
            onClick={twostar}
            className={`text-md md:text-xl border-b-[2px] cursor-pointer w-20 md:w-28 text-center py-2 transition-all ease-in-out duration-500 ${
              twoStar ? "border-red-400" : "border-gray-400"
            }`}
          >
            Two Star
          </span>
          <span
            onClick={threestar}
            className={`text-md md:text-xl border-b-[2px] cursor-pointer w-20 md:w-28 text-center py-2 transition-all ease-in-out duration-500 ${
              threeStar ? "border-red-400" : "border-gray-400"
            }`}
          >
            Three Star
          </span>
        </div>
        <div>
          <div className="flex flex-wrap">
            {Hotel.map((hotel) => (
              <Link
                to={`/hotel/${hotel.id}`}
                key={hotel.id}
                className="w-6/12 md:w-4/12 px-2 md:px-5"
              >
                <div className="shadow-gray-300 shadow-lg rounded-lg">
                  {" "}
                  <div>
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="aspect-video object-cover"
                    />
                  </div>
                  <div className="px-1 md:px-2 py-2 md:py-5">
                    <h5 className="font-semibold text-md md:text-xl">
                      {hotel.name}
                    </h5>
                    <Rating rating={hotel.rating} />
                    <h5 className="font-regular text-md md:text-lg">
                      {hotel.country}
                    </h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
