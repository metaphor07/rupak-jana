import React, { useState, useEffect } from "react";

import axios from "axios";
import { Share } from "@mui/icons-material";
import Skeleton from "@mui/material/Skeleton";
import FacebookShare from "./components/FacebookShare";
import TwitterShare from "./components/TwitterShare";
import WhatsappShare from "./components/WhatsappShare";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const App = () => {
  // the first hook is used to store the "image url"
  const [randomImage, setRandomImage] = useState(null);

  // and this is used for the check condition purpose
  const [share, setShare] = useState(false);

  // when the page is reload it will automatically call the random image
  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    // here we use axios for the api call, it has two state then and cattch
    // if the reqest successful it goes to the then section if any error occure it will goes the error section
    axios
      .get("https://picsum.photos/500/300")

      .then((response) => {
        setRandomImage(response.request.responseURL);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching random image:", error);
      });
  };

  return (
    <HelmetProvider>
      <div className="container">
        {/* if image available then show the image || other wise show the normal skeleton */}
        {randomImage ? (
          <img
            src={randomImage}
            alt="Random Image"
            className="centered-image"
          />
        ) : (
          <>
            <p>Image Loading...</p>
            {/* it is react component for showing the skeleton of loading functionality */}
            <Skeleton width={500} height={300} />
          </>
        )}

        {/* It is share button when click it shows three item "facebook, twitter and whatsapp" */}
        <div>
          <button className="shareBtn" onClick={() => setShare(!share)}>
            <Share className="social-shareIcon" />
          </button>
        </div>

        {/* when clicked then show */}
        {share && (
          <div className="share-button-container">
            <NavLink
              to={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
            >
              {/* <a target="_blank" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpearlwater.in%2Fpump%2Fkirloskar-1-hp-domestic-water-pump" class="jssocials-share-link"><i class="fa fa-facebook jssocials-share-logo"></i></a> */}
              <FacebookShare randomImage={randomImage} />
            </NavLink>
            <TwitterShare randomImage={randomImage} />
            <WhatsappShare randomImage={randomImage} />
          </div>
        )}

        {/* here we place a normally button which fetch random image without loading the page */}
        {/* <button onClick={fetchRandomImage}>Fetch New Image</button> */}
      </div>
    </HelmetProvider>
  );
};

export default App;
