import { createContext } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { useState } from "react";
import PropTypes from "prop-types";


const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 9000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  
const MovieContext = createContext();
 
const MovieProvider = ({ children }) => {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
  
    const handleTrailer = async (movieId) => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
  
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          options
        );
  
        const data = await response.json();
        setTrailerUrl(data.results[0]?.key);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <MovieContext.Provider value={{ handleTrailer }}>
        {children}
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {trailerUrl && (
            <div className="flex items-center justify-center mt-5">
              <YouTube videoId={trailerUrl} opts={opts} />
            </div>
          )}
        </Modal>
      </MovieContext.Provider>
    );
  };
  
MovieProvider.propTypes = {
    children: PropTypes.node,
}


export {MovieProvider, MovieContext}