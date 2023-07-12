// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { WhatsappShareButton } from "react-share";
import { WhatsApp } from "@mui/icons-material";

const WhatsappShare = ({ randomImage }) => {
  return (
    <div>
      <Helmet>
        <title>Whatsapp Share Image</title>
        <meta property="og:site_name" content="Random Image Share" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:secure_url" content={randomImage} />
      </Helmet>
      <WhatsappShareButton
        className="shareIcon"
        url={window.location.href}
        // quote="Check out this random image!"
      >
        <WhatsApp className="whatsappIcon" />
      </WhatsappShareButton>
    </div>
  );
};

export default WhatsappShare;
