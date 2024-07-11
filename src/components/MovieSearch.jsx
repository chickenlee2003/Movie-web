import PropTypes from "prop-types";
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
const MovieSearch = ({ title, data }) => {
    const { handleTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <div className=" grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-4  ">
         {data &&
        data.length > 0 &&
        data.map((item) => (
          <div
            key={item.id}
            className="h-[300px] w-[200px] relative group"
            onClick={() => handleTrailer(item.id)}
          >
            <div
              className=" group-hover:scale-105 transition-all duration-500
                             ease-in-out w-full h-full cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-30" />
              <img
                // className="w-full h-full object-cover"
                className="w-[full] h-full object-cover "
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                alt={item.title}
              />
              <div className="absolute bottom-4 left-4">
                <p className="uppercase text-[1rem]">
                  {item.title || item.original_title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
MovieSearch.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default MovieSearch;
