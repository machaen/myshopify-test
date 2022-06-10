import React, { forwardRef, useRef, useState } from "react";
import main from "../assets/images/main.jpg";
import racket from "../assets/images/group-10.png";
import "../assets/styles/sliders.scss";
import "../assets/styles/home.scss";
import "../assets/styles/buttons.scss";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
/* import ReactSwipe from "react-swipe"; */
import AliceCarousel from "react-alice-carousel";
export const HomeScreen = () => {
  // console.log( user );
  const [activeIndex, setActiveIndex] = useState(0);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const itemsLength = Array.from({ length: 5 });
  const items = itemsLength.map((item, index) => {
    const style = { width: 350 };
    return (
      <div
        key={`carousel-item-${index}`}
        className="item carousel-container-items"
      >
        <span className="item-number">{++index}</span>
        <img src={racket} alt="" />
      </div>
    );
  });

  const Carousel = forwardRef((props, ref) => {
    return (
      <AliceCarousel
        autoWidth
        activeIndex={activeIndex}
        infinite
        mouseTracking
        items={items}
        ref={ref}
        onSlideChanged={syncActiveIndex}
        disableDotsControls
        disableButtonsControls
      />
    );
  });

  const carouselRef = useRef(null);

  return (
    <>
      <div className="slider-one-home">
        <div className="content">
          <p>
            Las mejores raquetas para jugar <strong>Tennis</strong>
          </p>
          <div>
            <button className="btn btn-light font-weight-bold">
              ACERCA DE NOSOTROS
            </button>
          </div>
        </div>
        <img src={main} alt="" />
      </div>
      <div className="history-home">
        <div>
          <span>TENNIS</span>
        </div>
        <div>
          <h2>Raquetas.Accesorios. Pelotas.</h2>
          <p>
            Conoce nuestras raquetas y aprende a jugar Tennis como un
            profesional.
          </p>
        </div>
        <div>
          <button className="btn btn-dark">HISTORIA</button>
        </div>
      </div>
      <div className="shop-home">
        <div className="our-rackets">
          <div className="description">
            <h2>Nuestras Raquetas</h2>
            <p>
              Conoce nuestras raquetas y aprende a jugar Tennis cómo un
              profesional.
            </p>
          </div>
          <div className="carousel-options">
            <div
              className="carousel-indicators"
              data-itemsLength={itemsLength.length}
            >
              {itemsLength.map((value, index) => (
                <span
                  key={`carousel-indicator-${index}`}
                  className={"indicator " + (activeIndex == index && "active")}
                ></span>
              ))}
            </div>
            <div className="carousel-arrows">
              <span
                className="left"
                onClick={() => carouselRef.current.slidePrev()}
              ></span>
              <span
                className="right"
                onClick={() => carouselRef.current.slideNext()}
              ></span>
            </div>
          </div>
        </div>
        <div className="carousel">
          <Carousel ref={carouselRef} />
        </div>
      </div>
      <div className="prefooter"></div>
      <footer className="footer">
        <ul className="menu-footer">
          <li>
            <a className="active" href="">
              Inicio
            </a>
          </li>
          <li>
            <a href="">Acerca de nosotros</a>
          </li>
          <li>
            <a href="">Historia</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </footer>
    </>
  );
};
