import React, { useState } from "react";
import Container from "@mui/material/Container";
import t from "../assets/t.webp";
import c from "../assets/c.webp";
import hh from "../assets/hh.webp";
import th from "../assets/th.webp";
import ch from "../assets/ch.webp";
import bp from "../assets/bp.webp";
import kp from "../assets/kp.webp";
import t2 from "../assets/t2.webp";
import e from "../assets/e.webp";
import d from "../assets/d.webp";
import bph from "../assets/bph.webp";
import kph from "../assets/kph.webp";
import t2h from "../assets/t2h.webp";
import eh from "../assets/eh.webp";
import dh from "../assets/dh.webp";
import p from "../assets/p.webp";
import ku from "../assets/ku.webp";
import p2 from "../assets/p2.webp";
import c2 from "../assets/c2.webp";
import h2 from "../assets/h2.webp";
import ph from "../assets/ph.webp";
import kuh from "../assets/kuh.webp";
import p2h from "../assets/p2h.webp";
import c2h from "../assets/c2h.webp";
import h2h from "../assets/h2h.webp";
import h3 from "../assets/h3.webp";
import wc from "../assets/wc.webp";
import s from "../assets/s.webp";
import gh from "../assets/gh.webp";
import bc from "../assets/bc.webp";
import h3h from "../assets/h3h.webp";
import wch from "../assets/wch.webp";
import sh from "../assets/sh.webp";
import ghh from "../assets/ghh.webp";
import bch from "../assets/bch.webp";
import bh from "../assets/bh.webp";
import wc2 from "../assets/wc2.webp";
import l from "../assets/l.webp";
import dhhh from "../assets/dhhh.webp";
import pc from "../assets/pc.webp";
import bhh from "../assets/bhh.webp";
import wc2h from "../assets/wc2h.webp";
import lh from "../assets/lh.webp";
import dhh from "../assets/dhh.webp";
import pch from "../assets/pch.webp";
import wc3 from "../assets/wc3.webp";
import p3 from "../assets/p3.webp";
import rc from "../assets/rc.webp";
import rd from "../assets/rd.webp";
import bl from "../assets/bl.webp";
import wc3h from "../assets/wc3h.webp";
import p3h from "../assets/p3h.webp";
import rch from "../assets/rch.webp";
import rdh from "../assets/rdh.webp";
import blh from "../assets/blh.webp";
import sg from "../assets/sg.webp";
import chh from "../assets/chh.webp";
import pg from "../assets/pg.webp";
import bf from "../assets/bf.webp";
import m from "../assets/m.webp";
import sgh from "../assets/sgh.webp";
import chhh from "../assets/chhh.webp";
import pgh from "../assets/pgh.webp";
import bfh from "../assets/bfh.webp";
import mh from "../assets/mh.webp";
import pot from "../assets/pot.webp";
import mu from "../assets/mu.webp";
import bkh from "../assets/bkh.webp";
import bkh2 from "../assets/bkh2.webp";
import bkh3 from "../assets/bkh3.webp";
import poth from "../assets/poth.webp";
import muh from "../assets/muh.webp";
import bkhh from "../assets/bkhh.webp";
import bkh2h from "../assets/bkh2h.webp";
import bkh3h from "../assets/bkh3h.webp";
import re from "../assets/re.webp";
import f from "../assets/f.webp";
import bkh5 from "../assets/bkh5.webp";
import be from "../assets/be.webp";
import bkh4 from "../assets/bkh4.webp";
import reh from "../assets/reh.webp";
import fh from "../assets/fh.webp";
import bkh5h from "../assets/bkh5h.webp";
import beh from "../assets/beh.webp";
import bkh4h from "../assets/bkh4h.webp";
import { FaStar } from "react-icons/fa";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [{ url: bkh5, tittle: "Artisan Cowboy Riding Horse Statue", price: "₹ 5,800.00", hoverUrl: bkh5h }, { url: be, tittle: "Elephant Family Bond: A Symbol of Unity and Strength", price: "₹ 4,800.00", hoverUrl: beh }, { url: bkh4, tittle: "Majestic Horse Figurine 'Fearless Ascent'", price: "₹ 5,800.00", hoverUrl: bkh4h }, { url: bkh, tittle: "Majestic Horse Figurine 'Rising Spirit'", price: "₹ 5,800.00", hoverUrl: bkhh }, { url: bkh2, tittle: "Artisan Cowboy Riding Horse Statue - II", price: "₹ 5,800.00", hoverUrl: bkh2h }, { url: bkh3, tittle: "Majestic Horse Figurine 'Fearless Freedom'", price: "₹ 12,800.00", hoverUrl: bkh3h }, { url: re, tittle: "Vintage Hand-Painted Blue & White Elephant", price: "₹ 5,800.00", hoverUrl: reh }, { url: f, tittle: "Angelfish Glass Figurine", price: "₹ 3,460.00", hoverUrl: fh }, { url: pg, tittle: "Golden Decorative Penguin Figurine", price: "₹ 8,600.00", hoverUrl: pgh }, { url: bf, tittle: "Golden Butterfly Figurine - Small", price: "₹ 3,400.00", hoverUrl: bfh }, { url: m, tittle: "Majestic Golden Horse Head", price: "₹ 12,800.00", hoverUrl: mh }, { url: pot, tittle: "Whale Tail Glass Figurine", price: "₹ 3,860.00", hoverUrl: poth }, { url: mu, tittle: "Purple Rooster Glass Figurine", price: "₹ 3,460.00", hoverUrl: muh }, { url: rc, tittle: "Colorful Cat Glass Figurine - Small", price: "₹ 2,860.00", hoverUrl: rch }, { url: rd, tittle: "Venus Back Dog Glass Figurine", price: "₹ 4,860.00", hoverUrl: rdh }, { url: bl, tittle: "Macaw Parrot Glass Figurine", price: "₹ 3,480.00", hoverUrl: blh }, { url: sg, tittle: "Pelican with an Open Beak Glass Figurine", price: "₹ 5,640.00", hoverUrl: sgh }, { url: chhh, tittle: "Modern Abstract Animal Sculpture - Black", price: "₹ 6,400.00", hoverUrl: chh }, { url: l, tittle: "'Regal Roar' A Majestic Lion Figurine - Small", price: "₹ 2,450.00", hoverUrl: lh }, { url: dhhh, tittle: "'Equine Elegance' Horse Figurine", price: "₹ 3,890.00", hoverUrl: dhh }, { url: pc, tittle: "Mesmerizing Peacock Sculpture", price: "₹ 24,500.00", hoverUrl: pch }, { url: wc3, tittle: "Unique Tray-Tailed Cat Figurine", price: "₹ 3,290.00", hoverUrl: wc3h }, { url: p3, tittle: "Impeccable Artistic Rooster Figurine", price: "₹ 3,580.00", hoverUrl: p3h }, { url: s, tittle: "Folk Art Bird Figurine - Small", price: "₹ 1,050.00", hoverUrl: sh }, { url: gh, tittle: "Majestic Horse Figurines", price: "₹ 2,450.00", hoverUrl: ghh }, { url: bc, tittle: "Playful Cat Tabletop Plush Toy", price: "₹ 1,250.00", hoverUrl: bch }, { url: bh, tittle: "'Equine Nurturing' A Horse Feeding Figurine", price: "₹ 1,850.00", hoverUrl: bhh }, { url: wc2, tittle: "The Tray-Tailed Cat Figurine", price: "₹ 2,600.00", hoverUrl: wc2h }, { url: p2, tittle: "'Charming Trio' Adorable Rooster Figurine", price: "₹ 2,600.00", hoverUrl: p2h }, { url: c2, tittle: "Playful Pup Tabletop Plush Toy", price: "₹ 1,250.00", hoverUrl: c2h }, { url: wc, tittle: "Playful Pup Tabletop Plush Toy", price: "₹ 1,250.00", hoverUrl: wch }, { url: h3, tittle: "'Galloping Grace' Gold & Black Horse Figurine", price: "₹ 3,850.00", hoverUrl: h3h }, { url: h2, tittle: "'Galloping Grace' Gold & Black Horse Figurine", price: "₹ 3,850.00", hoverUrl: h2h }, { url: e, tittle: "Black & Gold Elephant Figurine", price: "₹ 1,990.00", hoverUrl: eh }, { url: d, tittle: "Majestic Guardian: Unveiling the Secrets of the Foo Dogs - White", price: "₹ 9,600.00", hoverUrl: dh }, { url: ku, tittle: "Bulldog Bluetooth Speaker Statue - Pink", price: "₹ 16,500.00", hoverUrl: kuh }, { url: p, tittle: "Royal Cockatoo Velvet Figurine - Pink", price: "₹ 8,850.00", hoverUrl: ph }, { url: t2, tittle: "Abstract Polygonal Geometric Leopard Figurine", price: "₹ 6,400.00", hoverUrl: t2h }, { url: t, tittle: "Abstract Polygonal Geometric Leopard Figurine", price: "₹ 5,800.00", hoverUrl: th }, { url: c, tittle: "Sleeping Pup Tabletop Plush Toy", price: "₹ 1,250.00", hoverUrl: ch }, { url: hh, tittle: "'Equus' Cast Iron Horse Figurine", price: "₹ 3,200.00", hoverUrl: hh}, { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: bph }, { url: kp, tittle: "'When Pig's Fly' Wall Mounted Figurine", price: "₹ 2,350.00", hoverUrl: kph }];

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
                  {
                    img.url === c || img.url === hh || img.url === p2 || img.url === p3 ? <div className="flex justify-center mt-2"><FaStar className="text-[#ffe234]" /><FaStar className="text-[#ffe234]" /><FaStar className="text-[#ffe234]" /><FaStar className="text-[#ffe234]" /><FaStar className="text-[#ffe234]" /></div> : null
                  }
                  <p className="text-sm">{img.price}</p>
                </div>
                {/* Add to Cart Button */}
                <button
                  className="absolute bottom-[120px] w-[95%]  bg-white text-black  py-3  transition-all duration-500 opacity-0 invisible  group-hover:opacity-100 group-hover:visible left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 "
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

export default ImageSlider;



