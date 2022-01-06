import React from "react";
import "../App.css";

const Slide = ({ info: { image, text } }) => {
  return (
    <div>
      <div className="imageContainer">
        <div className="imageContainerInner">
          <img className="imgtag" src={image} />
        </div>
        <div className="imageContainerInner">
          <img className="imgtag" src={image} />
        </div>
        <div className="imageContainerInner">
          <img className="imgtag" src={image} />
        </div>
      </div>

      <div className="textonchanging">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Slide;
