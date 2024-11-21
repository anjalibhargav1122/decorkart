import React, { useState } from "react";
import Container from "@mui/material/Container";
import t from "../assets/t.webp";
import c from "../assets/c.webp";
import hh from "../assets/hh.webp";
import k39h from "../assets/k39h.webp";
import k40h from "../assets/k40h.webp";
import bp from "../assets/bp.webp";
import kp from "../assets/kp.webp";
import t2 from "../assets/t2.webp";
import e from "../assets/e.webp";
import d from "../assets/d.webp";
import k41h from "../assets/k41h.webp";
import k44h from "../assets/k44h.webp";
import k45h from "../assets/k45h.webp";
import k46h from "../assets/k46h.webp";
import k47h from "../assets/k47h.webp";
import k48h from "../assets/k48h.webp";
import k49h from "../assets/k49h.webp";
import k50h from "../assets/k50h.webp";
import k42h from "../assets/k42h.webp";
import k43h from "../assets/k43h.webp";
import k38h from "../assets/k38h.webp";
import k34h from "../assets/k34h.webp";
import k35h from "../assets/k35h.webp";
import p from "../assets/p.webp";
import ku from "../assets/ku.webp";
import p2 from "../assets/p2.webp";
import c2 from "../assets/c2.webp";
import h2 from "../assets/h2.webp";
import k37h from "../assets/k37h.webp";
import k36h from "../assets/k36h.webp";
import k29h from "../assets/k29h.webp";
import k30h from "../assets/k30h.webp";
import k33h from "../assets/k33h.webp";
import h3 from "../assets/h3.webp";
import wc from "../assets/wc.webp";
import s from "../assets/s.webp";
import gh from "../assets/gh.webp";
import bc from "../assets/bc.webp";
import k32h from "../assets/k32h.webp";
import k31h from "../assets/k31h.webp";
import k24h from "../assets/k24h.webp";
import k25h from "../assets/k25h.webp";
import k26h from "../assets/k26h.webp";
import bh from "../assets/bh.webp";
import wc2 from "../assets/wc2.webp";
import l from "../assets/l.webp";
import dhhh from "../assets/dhhh.webp";
import pc from "../assets/pc.webp";
import k27h from "../assets/k27h.webp";
import k28h from "../assets/k28h.webp";
import k19h from "../assets/k19h.webp";
import k20h from "../assets/k20h.webp";
import k21h from "../assets/k21h.webp";
import wc3 from "../assets/wc3.webp";
import p3 from "../assets/p3.webp";
import rc from "../assets/rc.webp";
import rd from "../assets/rd.webp";
import bl from "../assets/bl.webp";
import k22h from "../assets/k22h.webp";
import k23h from "../assets/k23h.webp";
import k14h from "../assets/k14h.webp";
import k15h from "../assets/k15h.webp";
import k16h from "../assets/k16h.webp";
import sg from "../assets/sg.webp";
import k18h from "../assets/k18h.webp";
import pg from "../assets/pg.webp";
import bf from "../assets/bf.webp";
import m from "../assets/m.webp";
import k17h from "../assets/k17h.webp";
import chhh from "../assets/chhh.webp";
import k9h from "../assets/k9h.webp";
import k10h from "../assets/k10h.webp";
import k11h from "../assets/k11h.webp";
import pot from "../assets/pot.webp";
import mu from "../assets/mu.webp";
import bkh from "../assets/bkh.webp";
import bkh2 from "../assets/bkh2.webp";
import bkh3 from "../assets/bkh3.webp";
import k12h from "../assets/k12h.webp";
import k13h from "../assets/k13h.webp";
import k4h from "../assets/k4h.webp";
import k5h from "../assets/k5h.webp";
import k6h from "../assets/k6h.webp";
import re from "../assets/re.webp";
import f from "../assets/f.webp";
import bkh5 from "../assets/bkh5.webp";
import be from "../assets/be.webp";
import bkh4 from "../assets/bkh4.webp";
import k7h from "../assets/k7h.webp";
import k8h from "../assets/k8h.webp";
import k1h from "../assets/k1h.webp";
import k2h from "../assets/k2h.webp";
import k3h from "../assets/k3h.webp";
import { FaStar } from "react-icons/fa";

const ImageSlider3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [{ url: bkh5, tittle: "Olive Green Ginkgo Jar With Lid - Small", price: "₹ 2,290.00", hoverUrl: k1h },
  { url: be, tittle: "Storage Glass Jar with Bamboo Lid & Spoon - Large", price: "₹ 950.00", hoverUrl: k2h },
  { url: bkh4, tittle: "Diamond Candy Buffet Jar - Blue", price: "₹ 950.00", hoverUrl: k3h },
  { url: bkh, tittle: "Golden Glass Jars With Flower Lid", price: "₹ 750.00", hoverUrl: k4h },
  { url: bkh2, tittle: "'Butterfly Motif' Fracturing Glass Container", price: "₹ 3,450.00", hoverUrl: k5h },
  { url: bkh3, tittle: "Tulips Brass Container With tray", price: "₹ 8,900.00", hoverUrl: k6h },
  { url: re, tittle: "Carnival Glass Storage Jar With Lid - Large", price: "₹ 4,650.00", hoverUrl: k7h },
  { url: f, tittle: "Carnival Glass Storage Jar With Lid - Small", price: "₹ 2,690.00", hoverUrl: k8h },
  { url: pg, tittle: "Olive Green Ginkgo Jar With Lid - Large", price: "₹ 2,650.00", hoverUrl: k9h },
  { url: bf, tittle: "Olive Green Ginkgo Jar With Lid - Medium", price: "₹ 2,490.00", hoverUrl: k10h },
  { url: m, tittle: "Majestic Golden Horse Head", price: "₹ 12,800.00", hoverUrl: k11h },
  { url: pot, tittle: "Whale Tail Glass Figurine", price: "₹ 3,860.00", hoverUrl: k12h },
  { url: mu, tittle: "Purple Rooster Glass Figurine", price: "₹ 3,460.00", hoverUrl: k13h },
  { url: rc, tittle: "Colorful Cat Glass Figurine - Small", price: "₹ 2,860.00", hoverUrl: k14h },
  { url: rd, tittle: "Venus Back Dog Glass Figurine", price: "₹ 4,860.00", hoverUrl: k15h },
  { url: bl, tittle: "Macaw Parrot Glass Figurine", price: "₹ 3,480.00", hoverUrl: k16h },
  { url: sg, tittle: "Pelican with an Open Beak Glass Figurine", price: "₹ 5,640.00", hoverUrl: k17h },
  { url: chhh, tittle: "Modern Abstract Animal Sculpture - Black", price: "₹ 6,400.00", hoverUrl: k18h }, { url: l, tittle: "'Regal Roar' A Majestic Lion Figurine - Small", price: "₹ 2,450.00", hoverUrl: k19h }, { url: dhhh, tittle: "'Equine Elegance' Horse Figurine", price: "₹ 3,890.00", hoverUrl: k20h }, { url: pc, tittle: "Mesmerizing Peacock Sculpture", price: "₹ 24,500.00", hoverUrl: k21h }, { url: wc3, tittle: "Unique Tray-Tailed Cat Figurine", price: "₹ 3,290.00", hoverUrl: k22h }, { url: p3, tittle: "Impeccable Artistic Rooster Figurine", price: "₹ 3,580.00", hoverUrl: k23h }, { url: s, tittle: "Folk Art Bird Figurine - Small", price: "₹ 1,050.00", hoverUrl: k24h }, { url: gh, tittle: "Majestic Horse Figurines", price: "₹ 2,450.00", hoverUrl: k25h }, { url: bc, tittle: "Playful Cat Tabletop Plush Toy", price: "₹ 1,250.00", hoverUrl: k26h }, { url: bh, tittle: "'Equine Nurturing' A Horse Feeding Figurine", price: "₹ 1,850.00", hoverUrl: k27h }, { url: wc2, tittle: "The Tray-Tailed Cat Figurine", price: "₹ 2,600.00", hoverUrl: k28h }, { url: p2, tittle: "'Charming Trio' Adorable Rooster Figurine", price: "₹ 2,600.00", hoverUrl: k29h }, { url: c2, tittle: "Playful Pup Tabletop Plush Toy", price: "₹ 1,250.00", hoverUrl: k30h }, { url: wc, tittle: "Playful Pup Tabletop Plush Toy", price: "₹ 1,250.00", hoverUrl: k31h }, { url: h3, tittle: "'Galloping Grace' Gold & Black Horse Figurine", price: "₹ 3,850.00", hoverUrl: k32h },
  { url: h2, tittle: "'Galloping Grace' Gold & Black Horse Figurine", price: "₹ 3,850.00", hoverUrl: k33h },
  { url: e, tittle: "Black & Gold Elephant Figurine", price: "₹ 1,990.00", hoverUrl: k34h },
  { url: d, tittle: "Majestic Guardian: Unveiling the Secrets of the Foo Dogs - White", price: "₹ 9,600.00", hoverUrl: k35h },
  { url: ku, tittle: "Bulldog Bluetooth Speaker Statue - Pink", price: "₹ 16,500.00", hoverUrl: k36h },
  { url: p, tittle: "Royal Cockatoo Velvet Figurine - Pink", price: "₹ 8,850.00", hoverUrl: k37h },
  { url: t2, tittle: "Abstract Polygonal Geometric Leopard Figurine", price: "₹ 6,400.00", hoverUrl: k38h },
  { url: t, tittle: "Abstract Polygonal Geometric Leopard Figurine", price: "₹ 5,800.00", hoverUrl: k39h },
  { url: c, tittle: "Sleeping Pup Tabletop Plush Toy", price: "₹ 1,250.00", hoverUrl: k40h },
  { url: hh, tittle: "'Equus' Cast Iron Horse Figurine", price: "₹ 3,200.00", hoverUrl: k43h },
  { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: k44h },
  { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: k45h },
  { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: k46h },
  { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: k47h },
  { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: k48h },
  { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: k49h },
  { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: k50h },
  { url: bp, tittle: "'When Pig's Fly' Decorative Figurine", price: "₹ 1,150.00", hoverUrl: k41h },
  { url: kp, tittle: "'When Pig's Fly' Wall Mounted Figurine", price: "₹ 2,350.00", hoverUrl: k42h }];

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

export default ImageSlider3;



