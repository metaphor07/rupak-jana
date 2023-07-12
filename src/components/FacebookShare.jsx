// import { Helmet } from "react-helmet"; //it is used to generate dynamic metadata
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FacebookShareButton } from "react-share";
import { Facebook } from "@mui/icons-material";

const FacebookShare = ({ randomImage }) => {
  // get the image url by props
  return (
    <div>
      {/* inside the helmet we decleare the dynamic metadata which helps to show the preview */}
      {/*at the bellow the og=> open graph which helps to making seo friendly*/}
      <Helmet>
        <title>Facebook Share Image</title>
        <meta property="og:title" content="Random Image Share" />
        <meta
          property="og:description"
          content="This image is randomly generated"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={randomImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="300" />
      </Helmet>

      {/* and bellow is the component of react-share which pass the site url */}
      <FacebookShareButton
        className="shareIcon"
        url={window.location.href}
        // quote="Check out this random image!"
      >
        <Facebook className="facebookIcon" />
      </FacebookShareButton>
    </div>
  );
};

export default FacebookShare;
