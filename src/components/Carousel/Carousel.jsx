import React, { useRef, useState } from "react";
import "./Carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Carousel = () => {
  const carouselElement = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselElement.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const scrollX = e.pageX - startX;
    carouselElement.current.scrollLeft = scrollX;
  };
  const handleScrollLeft = () => {
    carouselElement.current.scrollLeft -= 150; // Scroll 100 pixels left
  };

  const handleScrollRight = () => {
    carouselElement.current.scrollLeft += 150; // Scroll 100 pixels right
  };
  return (
    <section className="carousel-section ">
      <MdArrowBackIos
        className="carousel-icon left-arrow"
        id="left"
        onClick={handleScrollLeft}
      />
      <ul
        className={isDragging == true ? "carousel dragging" : "carousel"}
        ref={carouselElement}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
        <li className="card">
          <div className="carousel-img">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food-image"
            />
          </div>
          <h2>Name</h2>
          <span>Pizza</span>
        </li>
      </ul>
      <MdArrowForwardIos
        className="carousel-icon right-arrow"
        id="right"
        onClick={handleScrollRight}
      />
    </section>
  );
};

export default Carousel;
