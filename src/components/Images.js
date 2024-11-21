import React from "react";
import Container from "@mui/material/Container";
import a from "../assets/1i.webp";
import b from "../assets/2i.webp";
import c from "../assets/3i.webp";
import d from "../assets/4i.webp";
import e from "../assets/5i.webp";
import f from "../assets/1ih.webp";
import g from "../assets/2ih.webp";
import h from "../assets/3ih.webp";
import i from "../assets/4ih.webp";
import j from "../assets/5ih.webp";

const Images = () => {
  const images = [
    { url: a, title: "Golden Cascade Crystal Retractable Ceiling Fan + Chandelier Light (with Remote Control)", price: "₹ 16,800.00", hoverUrl: f , price2 : "₹ 22,400.00"},
    { url: b, title: "Ginkgo Crystal Retractable Ceiling Fan + Chandelier Light (with Remote Control)", price: "₹ 24,600.00", hoverUrl: g , price2 : "₹ 32,800.00"},
    { url:c , title: "Crystal Floral Retractable Ceiling Fan + Chandelier Light (with Remote Control)", price: "₹ 24,600.00", hoverUrl: h, price2 : "₹ 32,800.00" },
    { url: d, title: "Crystal Leaf Retractable Ceiling Fan + Chandelier Light (with Remote Control)", price: "₹ 24,600.00", hoverUrl: i , price2 : "₹ 32,800.00"},
    { url:e , title: "Crystal Feather Wings Retractable Ceiling Fan + Chandelier Light (with Remote Control)", price: "₹ 24,600.00", hoverUrl:  j, price2 : "₹ 32,800.00"}
  ];

  return (
    <Container maxWidth="lg">
      <div className="mt-4 flex justify-between gap-4 overflow-auto sm:overflow-visiable">
        {images.map((img, index) => (
          <div key={index} className="relative group w-full sm:w-1/5 md:w-1/5 lg:w-1/5 shrink-0 sm:shrink-1 ">
            {/* NEW Label */}
            <div className="bg-[#913b59] text-white absolute top-4 left-4 px-2 py-1 text-xs rounded-full z-10 pointer-events-none">
              SAVE 25%
            </div>

            {/* Default Image */}
            <img
              src={img.url}
              alt={`slide-img-${index}`}
              className="transition-opacity duration-500 group-hover:opacity-0 w-full h-[43vh] object-cover rounded-lg"
            />

            {/* Hover Image */}
            <img
              src={img.hoverUrl}
              alt={`hover-img-${index}`}
              className="absolute inset-0 w-full h-[43vh] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100  rounded-lg"
            />

            <div className="text-center mt-5">
              <p className="text-sm">{img.title}</p>
              <div className="flex justify-center mt-2">
                <p className="text-sm text-[#914d94]">{img.price}</p>
                <p className="text-sm text-[#959595] ml-3">
                  <del>{img.price2}</del>
                </p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
                  className="absolute bottom-[135px] w-[95%]  bg-white text-black  py-3  transition-all duration-500 opacity-0 invisible  group-hover:opacity-100 group-hover:visible left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 "
                >
                  +ADD TO CART

                  
                </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Images;
