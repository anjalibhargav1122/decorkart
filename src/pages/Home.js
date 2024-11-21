import React, { useEffect, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import { FaArrowRight, FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./Pages.css"
import Navbar from '../components/Navbar';
import one from "../videos/one.mp4"
import two from "../videos/two.mp4"
import three from "../videos/three.mp4"
import four from "../videos/four.mp4"
import five from "../videos/five.mp4"
import six from "../videos/six.mp4"
import seven from "../videos/seven.mp4"
import eight from "../videos/eight.mp4"
import nine from "../videos/nine.mp4"
import ten from "../videos/ten.mp4"
import Lighting from "../assets/Lighting.webp"
import Inspired from "../assets/Inspired.webp"
import Otto from "../assets/Otto.webp"
import sm from "../assets/sm.webp"
import art from "../assets/art.webp"
import cool from "../assets/cool.webp"
import ImageSlider from '../components/ImageSlider';
import ImageSlider2 from '../components/ImageSlider2';
import Images from '../components/Images';
import ImageSlider3 from '../components/ImageSlider3';
import ImageSlider4 from '../components/ImageSlider4';
import CardonImg from '../components/CardonImg';
import Grid from '@mui/material/Grid';
import Footer from '../components/Footer';





const Home = () => {



  const videos = [
    {
      "url": one,
      "tx": "New & Trending"
    },
    {
      "url": two,
      "tx": "Best Sellers"
    },
    {
      "url": three,
      "tx": "Kitchen Accessories"
    },
    {
      "url": four,
      "tx": "Decor"
    },
    {
      "url": five,
      "tx": "Kitchen"
    },
    {
      "url": six,
      "tx": "Lighting"
    },
    {
      "url": seven,
      "tx": "Wall Decor"
    },
    {
      "url": eight,
      "tx": "Furniture"
    },
    {
      "url": nine,
      "tx": "Bath"
    },
    {
      "url": ten,
      "tx": "Garden"
    }
  ]


  const text = [
    "A rare chance to save: Everything @ Half Price",
    "Festive Home Sale: Everything @ Flat 50% Off"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % text.length);
  };

  const prevText = () => {
    setCurrentTextIndex((prevIndex) =>
      (prevIndex - 1 + text.length) % text.length
    );
  };

  
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsButtonVisible(scrollTop > 0); // Show the button only when scrolled down
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextText, 5000);
    return () => clearInterval(intervalRef.current);
  }, [text.length]);

  return (
    <div>
      <Container maxWidth={false} className='bg-[#d9d4cc] pt-3 pb-3'>
        <Container maxWidth="sm" className='flex justify-between items-center'>
          <FaArrowLeft onClick={prevText} style={{ cursor: "pointer" }} />
          <span className='ff text-xs'>{text[currentTextIndex]}</span>
          <FaArrowRight onClick={nextText} style={{ cursor: "pointer" }} />
        </Container>
      </Container>
      <Navbar />
      <Container maxWidth={false} className=' pt-4 pb-4'>
        <div className=' video'>  {videos.map((v, i) => {
          return (<div className='w-[100px] sm:w-[90px] h-[100px] sm:h-[90px] rounded-full border-[3px] cursor-pointer border-[#9b4380]  p-1 shrink-0'><video className='w-full h-full rounded-full object-cover' loop autoPlay muted >
            <source key={i} src={v.url} type="video/mp4" />
            Your browser does not support the video.
          </video>
            <p className='ff text-[10px] text-center mt-4 whitespace-nowrap'>{v.tx}</p>
          </div>)
        })}</div>
      </Container>
      <a href='#'>
        <img src={Lighting} className='w-full h-full mt-0 sm:mt-8' /></a>

      <Container maxWidth="md" className='pt-10'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={12} md={4}>
            <div className='img1 flex justify-center items-end pb-4'><span className='border-b-2 text-white border-white ff text-sm ws'>FAN LIGHTS</span></div>
            <div className='img2 flex justify-center items-end mt-4 pb-4'><span className='border-b-2 text-white border-white ff text-sm ws'>WALL LIGHTS</span></div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='img4 flex justify-center items-end pb-4'><span className='border-b-2 text-white border-white ff text-sm '>CHANDELIERS</span></div>
            <div className='img5 flex justify-center items-end pb-4 mt-4'><span className='border-b-2 text-white border-white ff text-sm ws'>PENDANT LIGHTS</span></div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='img3 flex justify-center items-end pb-4'><span className='border-b-2 text-white border-white ff text-sm ws'>OUTDOOR LIGHTS</span></div>
            <div className='text-center mt-14'> <p className='text-3xl'>Magical</p>
              <p className='text-3xl mt-4'>Illumination</p><p className='text-[19px] mt-4'>Create the perfect ambiance with lighting that adds warmth and style to every room</p></div>
          </Grid>

        </Grid>
      </Container>

      <a href='#'>
        <img src={sm} className='w-full h-full mt-14 ' /></a>

      <ImageSlider />

      <a href='#'>
        <img src={art} className='w-full h-full  mb-4' /></a>

      <ImageSlider2 />


      <a href='#'>
        <img src={cool} className='w-full h-full  mb-5' /></a>
      <Images />


      <a href='#'>
        <img src={Inspired} className='w-full h-full  mt-4' /></a>
      <ImageSlider3 />

      <a href='#'>
        <img src={Otto} className='w-full h-full  mt-10' /></a>
      <ImageSlider4 />

      <div className='bgimg'>
        <CardonImg />


      </div>

     <Footer/>
    {isButtonVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[20px] sm:bottom-[100px] right-5 bg-[#d9d4cc] text-black p-2  shadow-lg "
        >
          <FaLongArrowAltUp />
        </button>
      )}
    </div>
  );
};

export default Home;
