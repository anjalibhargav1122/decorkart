import React from 'react'

import HoverDropdownMenu from '../components/Dropdown';
import { TiSocialFacebook, TiSocialPinterest } from 'react-icons/ti';
import whatsapp from "../assets/whatsapp.webp"
import store from "../assets/store.webp"
import email from "../assets/email.webp"
import paytm from "../assets/paytm.webp"
import googlepay from "../assets/googlepay.webp"
import upi from "../assets/upi.webp"
import cashon from "../assets/cashon.avif"
import payment from "../assets/payment.webp"
import emi from "../assets/emi.webp"
import decorkart from "../assets/decorkart.avif"
import play from "../assets/play.avif"
import app from "../assets/app.avif"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { BiLogoYoutube } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { LuGlobe2 } from "react-icons/lu";


const Footer = () => {
    const links = [
        {
          "href": "#",
          "tx": "Contact Us"
        },
        {
          "href": "#",
          "tx": "Returns + Refunds"
        },
        {
          "href": "#",
          "tx": "Shipping"
        },
        {
          "href": "#",
          "tx": "Terms & Conditions"
        },
        {
          "href": "#",
          "tx": "Privacy Policy"
        },
        {
          "href": "#",
          "tx": "Terms of Service"
        },
        {
          "href": "#",
          "tx": "Refund policy"
        }
      ]
    
      const links2 = [
        {
          "href": "#",
          "tx": "Easy Returns"
        },
        {
          "href": "#",
          "tx": "Gift Cards"
        },
        {
          "href": "#",
          "tx": "the BLOG"
        },
        {
          "href": "#",
          "tx": "Stores"
        },
        {
          "href": "#",
          "tx": "About Us"
        },
        {
          "href": "#",
          "tx": "Track Order"
        }
      ]
      
  return (
    <div>
    <Container maxWidth={false} className='bg-[#746b61] pt-20 pb-20'>
      <Container maxWidth="lg">
        <Grid container spacing={2} className='text-white'>
          <Grid item xs={6} md={3}>
            <p className='text-lg mb-5 ff'>SUPPORT</p>
            {
              links.map((link, i) => (
                <div key={i} className='mb-2'><a href={link.href} className='text-sm hover:text-[#d1ceca]'  >{link.tx}</a></div>
              ))
            }
          </Grid>
          <Grid item xs={6} md={3}>
            <p className='text-lg mb-5 ff'>QUICK LINKS</p>
            {
              links2.map((link, i) => (
                <div key={i} className='mb-2'><a href={link.href} className='text-sm hover:text-[#d1ceca]'  >{link.tx}</a></div>
              ))
            }
          </Grid>
          <Grid item xs={12} md={3}>

            <p className='text-lg mb-5 ff mt-[15px] sm:mt-[0px]'>GET IN TOUCH</p>
            <div className='flex items-center gap-4 mb-3'><img src={whatsapp} className='w-8 h-8' /><a href='#' className='text-sm'>9811536888 / 9811338191</a></div>
            <div className='flex items-center gap-4 mb-3'><img src={email} className='w-7 h-7' /><a href='#' className='text-sm'>info@thedecorkart.com</a></div>
            <div className='flex items-center gap-4 mb-3'><img src={store} className='w-7 h-7' /><a href='#' className='text-sm'>Our Stores</a></div>
            <div className='flex items-center gap-2 '><LuGlobe2 className='text-3xl' /> <HoverDropdownMenu /></div>

          </Grid>
          <Grid item xs={12} md={3}>

            <p className='text-lg mb-5 ff mt-[15px] sm:mt-[0px]'>FOLLOW US</p>
        <div className='flex'>    <div className='border-[1px] border-[#837b73]  w-14 h-14 flex justify-center items-center relative  group overflow-hidden'><TiSocialFacebook className='text-3xl group-hover:text-black'/> 
        <span className="absolute inset-0 bg-[#ffffff] opacity-0 group-hover:opacity-50 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span></div>
            <div className='border-[1px] border-[#837b73]  w-14 h-14 flex justify-center items-center relative  group overflow-hidden'><IoLogoInstagram  className='text-2xl group-hover:text-black'/>
        <span className="absolute inset-0 bg-[#ffffff] opacity-0 group-hover:opacity-50 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span></div>
            <div className='border-[1px] border-[#837b73]  w-14 h-14 flex justify-center items-center relative  group overflow-hidden'><TiSocialPinterest className='text-3xl group-hover:text-black'/>
        <span className="absolute inset-0 bg-[#ffffff] opacity-0 group-hover:opacity-50 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span></div>
            <div className='border-[1px] border-[#837b73]  w-14 h-14 flex justify-center items-center relative  group overflow-hidden'><BiLogoYoutube className='text-2xl group-hover:text-black'/>
        <span className="absolute inset-0 bg-[#ffffff] opacity-0 group-hover:opacity-50 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span></div></div>

        
        <p className='text-sm mt-10 ff uppercase'>Experience The Decor Kart App</p>
        <div className='flex justify-between mt-5 '><img src={play} className='w-32'/>
        <img src={app} className='w-32'/></div>
          </Grid>
        </Grid>
      </Container>

    </Container>

  <Container maxWidth={false} className='bg-[#746b61]'>
  <Container maxWidth="lg">
<img src={decorkart} className='w-full h-full'/>
    </Container>
    <Container maxWidth="lg" className='pt-14 pb-14 flex justify-between flex-col sm:flex-row'>
<p className='text-white ff text-xs flex items-center'>Shivalik Meta Plast Industries © 2024</p><div className='flex items-start sm:items-center gap-3 flex-col sm:flex-row'><span className='text-[#d6d3d0] text-xs'>We accept</span>
<div className='flex items-center gap-2 sm:gap-3'><img src={cashon} className='w-11 rounded bg-white p-1'/>
<img src={upi} className='w-11 rounded bg-white p-1'/>
<img src={googlepay} className='w-11 rounded bg-white p-1'/>
<img src={paytm} className='w-11 rounded bg-white p-1'/>
<img src={payment} className='w-11 rounded bg-white p-1'/>
<img src={emi} className='w-10 rounded '/>
<div className='inline-block bg-white  rounded p-1 pl-2 pr-2 text-xs'><span className='pb-0 mb-0'>PAY LATER</span></div></div>
</div>
    </Container>
  </Container>
</div>
  )
}

export default Footer