import Typography from "@material-ui/core/Typography";
import banner from "../assets/img/banner.jpeg";
import {
    Link
  } from "react-router-dom";

function Banner() {


  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundAttachment: "fixed",
    width: "100%",
    height: "400px",
    backgroundSize: "contain"
    
  };
  const overlay = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div style={bannerStyle}>
      <div style={overlay}>
        <Link to="/">
        <Typography variant="h2" color="textSecondary" component="p">
          Rick and morty character
        </Typography>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
