import React from "react";
import "./style.css";

const Video = ({ videoUrl, description }) => {
  console.log(videoUrl);
  return (
    <div className="video-container">
      <video key={videoUrl} className="video-player" controls loop autoPlay>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
    </div>
  );
};

export default Video;
