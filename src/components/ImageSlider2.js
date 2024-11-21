import React, { useState } from "react";
import Container from "@mui/material/Container";
import a from "../assets/15.webp";
import b from "../assets/14.webp";
import c from "../assets/13.webp";
import d from "../assets/11.webp";
import e from "../assets/12.webp";
import f from "../assets/19.webp";
import g from "../assets/20.webp";
import h from "../assets/17.webp";
import i from "../assets/16.webp";
import j from "../assets/18.webp";
import k from "../assets/25.webp";
import l from "../assets/24.webp";
import m from "../assets/21.webp";
import n from "../assets/22.webp";
import o from "../assets/23.webp";
import p from "../assets/28.webp";
import r from "../assets/29.webp";
import s from "../assets/30.webp";
import t from "../assets/26.webp";
import u from "../assets/33.webp";
import v from "../assets/34.webp";
import w from "../assets/31.webp";
import y from "../assets/35.webp";
import z from "../assets/36.webp";
import aa from "../assets/37.webp";
import cc from "../assets/38.webp";
import dd from "../assets/39.webp";
import ee from "../assets/44.webp";
import ff from "../assets/42.webp";
import gg from "../assets/43.webp";
import hh from "../assets/41.webp";
import ii from "../assets/45.webp";
import jj from "../assets/46.webp";
import ah from "../assets/15h.webp";
import bh from "../assets/14h.webp";
import ch from "../assets/13h.webp";
import dh from "../assets/11h.webp";
import eh from "../assets/12h.webp";
import fh from "../assets/19h.webp";
import gh from "../assets/20h.webp";
import ih from "../assets/16h.webp";
import jh from "../assets/18h.webp";
import kh from "../assets/25h.webp";
import lh from "../assets/24h.webp";
import mh from "../assets/21h.webp";
import nh from "../assets/22h.webp";
import oh from "../assets/23h.webp";
import ph from "../assets/28h.webp";
import qh from "../assets/27h.webp";
import rh from "../assets/29h.webp";
import sh from "../assets/30h.webp";
import th from "../assets/26h.webp";
import uh from "../assets/33h.webp";
import vh from "../assets/34h.webp";
import wh from "../assets/31h.webp";
import xh from "../assets/32h.webp";
import yh from "../assets/35h.webp";
import zh from "../assets/36h.webp";
import aah from "../assets/37h.webp";
import bbh from "../assets/40h.webp";
import cch from "../assets/38h.webp";
import ddh from "../assets/39h.webp";
import eeh from "../assets/44h.webp";
import ffh from "../assets/42h.webp";
import ggh from "../assets/43h.webp";
import hhh from "../assets/41h.webp";
import iih from "../assets/45h.webp";
import jjh from "../assets/46h.webp";
import { FaStar } from "react-icons/fa";

const ImageSlider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { url: a, tittle: "Chinoiserie Dinner Plate", price: "₹ 2,400.00", hoverUrl: ah },
    { url: b, tittle: "Chinoiserie Dinner Plate", price: "₹ 2,400.00", hoverUrl: bh },
    { url: c, tittle: "Chinoiserie Dinner Plate", price: "₹ 2,400.00", hoverUrl: ch },
    { url: d, tittle: "Rendezvous with Hand Painted Blue - Traditional Ceramic Pitcher", price: "₹ 4,460.00", hoverUrl: dh },
    { url: e, tittle: "Chinoiserie Dinner Plate", price: "₹ 1,600.00", hoverUrl: eh },
    { url: f, tittle: "Rendezvous with Blue Moon Vase", price: "₹ 4,860.00", hoverUrl: fh },
    { url: g, tittle: "Rendezvous with Blue - Wall Mounted Planter Kettle", price: "₹ 3,260.00", hoverUrl: gh },
    { url: h, tittle: "Rendezvous with Blue - Wall Mounted Planter Kettle", price: "₹ 3,260.00", hoverUrl: hh },
    { url: i, tittle: "Rendezvous with Blue - Wall Mounted Planter Kettle", price: "₹ 3,260.00", hoverUrl: ih },
    { url: j, tittle: "Rendezvous with Blue - Wall Mounted Planter Kettle", price: "₹ 3,260.00", hoverUrl: jh },
    { url: k, tittle: "Decadent - Blue & White Temple Jar - Small", price: "₹ 14,500.00", hoverUrl: kh },
    { url: l, tittle: "Decadent - Blue & White Porcelain Vase", price: "₹ 16,500.00", hoverUrl: lh },
    { url: m, tittle: "Classic Blue & White Teapot", price: "₹ 3,860.00", hoverUrl: mh },
    { url: n, tittle: "Classic Blue & White Teapot", price: "₹ 3,860.00", hoverUrl: nh },
    { url: o, tittle: "Rendezvous with Blue - Wall Mounted Planter Kettle", price: "₹ 3,260.00", hoverUrl: oh },
    { url: p, tittle: "Chinoiserie Decorative Easter Egg", price: "₹ 750.00", hoverUrl: ph },
    { url: qh, tittle: "Chinoiserie Decorative Ball", price: "₹ 950.00", hoverUrl: qh },
    { url: r, tittle: "Chinoiserie Decorative Ball: Style 2 - Small", price: "₹ 590.00", hoverUrl: rh },
    { url: s, tittle: "Rendezvous with Blue Vintage Ceramic Pitcher - Small", price: "₹ 3,860.00", hoverUrl: sh },
    { url: t, tittle: "Orchid Blue & White Serving Bowls", price: "₹ 650.00", hoverUrl: th },
    { url: u, tittle: "Chinoiserie Decorative Easter Egg", price: "₹ 750.00", hoverUrl: uh },
    { url: v, tittle: "Chinoiserie Decorative Ball - Set of 2", price: "₹ 950.00", hoverUrl: vh },
    { url: w, tittle: "Chinoiserie Decorative Ball", price: "₹ 950.00", hoverUrl: wh },
    { url: xh, tittle: "Chinoiserie Decorative Ball", price: "₹ 1,150.00", hoverUrl: xh },
    { url: y, tittle: "Oversized Classic Blue & White Temple Jar", price: "₹ 22,500.00", hoverUrl: yh },
    { url: z, tittle: "Rendezvous with Blue and White Kettle", price: "₹ 3,460.00", hoverUrl: zh },
    { url: aa, tittle: "Rendezvous with Blue - Wall Mounted Planter Kettle", price: "₹ 2,860.00", hoverUrl: aah },
    { url: bbh, tittle: "Chinoiserie Decorative Easter Egg", price: "₹ 750.00", hoverUrl: bbh },
    { url: cc, tittle: "Chinoiserie Decorative Easter Egg", price: "₹ 750.00", hoverUrl: cch },
    { url: dd, tittle: "Chinoiserie Decorative Easter Egg", price: "₹ 750.00", hoverUrl: ddh },
    { url: ee, tittle: "Classic Blue & White Teapot", price: "₹ 3,200.00", hoverUrl: eeh },
    { url: ff, tittle: "Blue and White Hand-Shaped Flower Vase", price: "₹ 5,400.00", hoverUrl: ffh },
    { url: gg, tittle: "Vintage Hand-Painted Blue & White Elephant", price: "₹ 5,800.00", hoverUrl: ggh },
    { url: hh, tittle: "Elegant Blue and White Vase", price: "₹ 5,600.00", hoverUrl: hhh },
    { url: ii, tittle: "Rendezvous with Blue - Wall Mounted Planter Kettle", price: "₹ 2,860.00", hoverUrl: iih },
    { url: jj, tittle: "Rendezvous with Blue - Wall Mounted Planter Kettle", price: "₹ 2,860.00", hoverUrl: jjh }
  ];

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
                {/* NEW Label */}
                {
                  img.url === b || img.url === f || img.url === g || img.url === h || img.url === i || img.url === j || img.url === k || img.url === l || img.url === m || img.url === n || img.url === s || img.url === z || img.url === aa || img.url === hh || img.url === ee || img.url === ii || img.url === jj ? <div className="bg-[#f3f2f0] absolute top-[20px] left-[20px] inline-block px-1.5 rounded-full text-[10px] z-10 pointer-events-none"
                  >
                    NEW
                  </div> : null
                }

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
                  {img.url === i || img.url === h || img.url === a || img.url === g || img.url === j || img.url === k || img.url === l || img.url === m || img.url === n || img.url === o || img.url === t ? (
                    <div className="flex justify-center mt-2">
                      <FaStar className="text-[#ffe234]" />
                      <FaStar className="text-[#ffe234]" />
                      <FaStar className="text-[#ffe234]" />
                      <FaStar className="text-[#ffe234]" />
                      <FaStar className="text-[#ffe234]" />
                    </div>
                  ) : null}
                  <p className="text-sm">{img.price}</p>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="absolute bottom-[120px] w-[94%] bg-white text-black py-3 transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0"
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

export default ImageSlider2;



