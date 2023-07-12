import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TwitterShareButton } from "react-share";
import { Twitter } from "@mui/icons-material";

const TwitterShare = ({ randomImage }) => {
  return (
    <div>
      <Helmet>
        <title>Twitter Share Image</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content={`${window.location.href}/twitterShare`}
        />
        <meta
          property="twitter:url"
          content={`${window.location.href}/twitterShare`}
        />
        <meta name="twitter:title" content="Random Image Share" />
        <meta
          name="twitter:description"
          content="This image is randomly generated"
        />
        <meta name="twitter:image" content={randomImage} />
      </Helmet>
      <TwitterShareButton
        className="shareIcon"
        url={window.location.href}
        // quote="Check out this random image!"
      >
        <Twitter className="twitterIcon" />
      </TwitterShareButton>
    </div>
  );
};

export default TwitterShare;
