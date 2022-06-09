import React from "react";
import main from "../assets/images/main.jpg"
import "../assets/styles/sliders.scss";
import "../assets/styles/buttons.scss";
export const HomeScreen = () => {
  // console.log( user );

  return (
    <div>
      <div className="slider-one-home">
        <div className="content">
          <p>
            Las mejores raquetas para jugar <strong>Tennis</strong> 
          </p>
          <div>
            <button className="btn btn-light font-weight-bold">ACERCA DE NOSOTROS</button>
          </div>
        </div>
        <img src={main} alt="" />
      </div>
      <hr />
    </div>
  );
};
