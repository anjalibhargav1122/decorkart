import React, { useState } from "react";
import Container from "@mui/material/Container";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.webp";
import s5 from "../assets/s5.webp";
import s6 from "../assets/s6.webp";
import s7 from "../assets/s7.webp";
import s8 from "../assets/s8.webp";
import s1h from "../assets/s1h.jpg";
import s2h from "../assets/s2h.webp";
import s3h from "../assets/s3h.jpg";
import s4h from "../assets/s4h.jpg";
import s5h from "../assets/s5h.jpg";
import s6h from "../assets/s6h.webp";
import s7h from "../assets/s7h.webp";


const ImageSlider4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const images = [
    { url: s1, tittle: "Lounge Ottoman - Dark Beige", price: "₹ 6,490.00", hoverUrl: s1h },
    { url: s2, tittle: "Luxe Ottoman - White", price: "₹ 6,490.00", hoverUrl: s2h },
    { url:s3 , tittle: "Lounge Ottoman - Light Beige", price: "₹ 6,490.00", hoverUrl: s3h },
    { url: s4, tittle: "Lounge Ottoman - Sky Blue", price: "₹ 6,490.00", hoverUrl: s4h },
    { url: s5, tittle: "Lounge Ottoman - Beige", price: "₹ 6,490.00", hoverUrl: s5h },
    { url: s6 , tittle: "Lounge Ottoman - Slate Grey", price: "₹ 6,490.00", hoverUrl:  s6h},
    { url:s7 , tittle: "'Guinness' Faux Leather Ottoman", price: "₹ 4,890.00", hoverUrl: s7h },
    { url: s8, tittle: "Faux Leather Set of 3 Storage Stools", price: "₹ 14,500.00", hoverUrl: s8 }
]
  const imagesPerSlide = 5;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <Container maxWidth="lg">
      <div style={styles.sliderContainer} className="mt-4">
        <button onClick={handlePrev} style={styles.arrow}>
          &#10094;
        </button>
        <div style={styles.slideWrapper}>
          <div
            style={{
              ...styles.slide,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <div key={index} style={styles.imageContainer} className="group relative">
                {/* Default Image */}
                <img
                  src={img.url}
                  alt={`slide-img-${index}`}
                  style={styles.image}
                  className="transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src={img.hoverUrl}
                  alt={`hover-img-${index}`}
                  className="absolute inset-0 w-full h-[43vh] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-2.5 rounded-[8px]"
                />
                <div className="text-center mt-5">
                  <p className="ff text-sm">{img.tittle}</p>
                 
                  <p className="text-sm">{img.price}</p>
                </div>
                {/* Add to Cart Button */}
                <button
                  className="absolute bottom-[95px] w-[95%]  bg-white text-black  py-3  transition-all duration-500 opacity-0 invisible  group-hover:opacity-100 group-hover:visible left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 "
                >
                  +ADD TO CART

                  
                </button>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} style={styles.arrow}>
          &#10095;
        </button>
      </div>
    </Container>
  );
};

const styles = {
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "100vw",
    overflow: "hidden",
    position: "relative",
  },
  imageContainer: {
    flex: "1 0 20%",
    maxWidth: "20%",
    padding: "10px",
    boxSizing: "border-box",
    position: "relative",
  },
  slideWrapper: {
    width: "100%",
    overflow: "hidden",
  },
  slide: {
    display: "flex",
    transition: "transform 0.5s ease",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  arrow: {
    cursor: "pointer",
    fontSize: "24px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "#333",
  },
};

export default ImageSlider4;



