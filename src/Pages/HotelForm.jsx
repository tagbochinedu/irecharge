import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCountries } from "../Features/Country/CountrySlice";
import { addHotels } from "../Features/Hotels/HotelSlice";
import { useNavigate } from "react-router-dom";

const HotelForm = () => {
  const navigate = useNavigate();
  const countries = useSelector(selectAllCountries);
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (name && image && rating > 0 && country) {
      try {
        const base64String = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

        dispatch(
          addHotels({
            name: name,
            country: country,
            rating: parseInt(rating),
            image: base64String,
          })
        );
        console.log(name, country, rating, image);
        setName("");
        setImage({});
        setRating(0);
        setCountry("");
        navigate("/");
        alert("success");
      } catch (err) {
        return err.message;
      }
    }
  };

  return (
    <section className="text-white mb-10 max-w-[350px] md:max-w-xl mx-auto pt-5">
      <h2 className="text-xl md:text-4xl font-bold text-center text-logo mb-5">
        Create a new Hotel
      </h2>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label
          htmlFor="post title"
          className="block text-md md:text-2xl mb-2 text-logo"
        >
          Hotel Name
        </label>
        <input
          type="text"
          id="hotel name"
          name="hotel name"
          value={name}
          required
          className="mb-5 h-7 md:h-10 rounded-md text-black px-2 w-full outline-0 bg-lgr border-[1px] focus:border-logo"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label
          htmlFor="country"
          className="block text-md md:text-2xl mb-2 text-logo"
        >
          Country
        </label>
        <select
          value={country}
          id="country"
          required
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          className="mb-5 h-7 md:h-10 rounded-md text-logo px-2 w-full outline-0 border-[1px] focus:border-logo"
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country} className="text-logo">
              {country}
            </option>
          ))}
        </select>
        <label
          htmlFor="country"
          className="block text-md md:text-2xl mb-2 text-logo "
        >
          Rating
        </label>
        <select
          value={rating}
          id="country"
          required
          onChange={(e) => {
            setRating(parseInt(e.target.value));
          }}
          className="mb-5 h-10 rounded-md text-logo px-2 w-full outline-0 border-[1px] focus:border-logo"
        >
          <option>Rate the hotel</option>
          <option value={"1"}>One Star</option>
          <option value={"2"}>Two Stars</option>
          <option value={"3"}>Three Stars</option>
        </select>
        <label
          htmlFor="post content"
          className="block text-md md:text-2xl mb-2 text-logo"
        >
          Upload an Image
        </label>
        <div className="flex items-center justify-center w-full mb-10">
          <label className="flex flex-col w-full min-h-32 border-4 border-dashed hover:bg-lgr transition-all ease-in-out duration-500 hover:border-gray-300 cursor-pointer">
            <div className="flex flex-col items-center justify-center pt-7">
              <>
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="upload"
                    className="w-36 h-auto"
                  />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a file
                    </p>
                  </>
                )}
              </>
            </div>
            <input
              type="file"
              className="opacity-0"
              accept=".jpeg,.jpg,.png"
              required
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-irecharge font-semibold rounded-md w-full py-2 hover:bg-red-500 "
        >
          Create Hotel
        </button>
      </form>
    </section>
  );
};

export default HotelForm;
