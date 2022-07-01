import React from "react";
import { Link } from "react-router-dom";
import img1 from '../Images/carousel1.jpg';
import img2 from '../Images/carousel2.jpg';
import img3 from '../Images/carousel3.jpg';

const Carousal = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} alt="Not Found" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1 className="text-white">Shop from the Best</h1>
              <p>Fill your home with Joy of Shoppy</p>
              <p><Link className="btn btn-lg btn-dark" to="/products">Know More</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} alt="Not Found" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />

          <div className="container">
            <div className="carousel-caption">
              <h1 className="text-white">Best for the Best</h1>
              <p>Best items available at discounted prices</p>
              <p><Link className="btn btn-lg btn-dark" to="/products">Shop Now</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} alt="Not Found" className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />

          <div className="container">
            <div className="carousel-caption text-end">
              <h1 className="text-white">Go For it Now</h1>
              <p>Shop Now to get flat 30% off</p>
              <p><Link className="btn btn-lg btn-dark" to="/products">Shop Now</Link></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal;