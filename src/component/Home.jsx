import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import bgImage from "../assets/image/background2.webp";
import binod from "../assets/image/binodphoto.webp";
import portfolio from "../assets/image/portfolioimage.webp";
import mobileapp from "../assets/image/mobileappimage.webp";
import cardgame from "../assets/image/flipcardgameimage.webp";
import ecommerce from "../assets/image/ecommerceshoppingsite.webp";
import htmlimage from "../assets/image/htmlimage.webp";
import javascriptimage from "../assets/image/javascriptimage.webp";
import reactjsimage from "../assets/image/reactjsimage.png";
import sqlimage from "../assets/image/sqlimage.webp";
import dsaimage from "../assets/image/dsaimage.webp";
import mongodbimage from "../assets/image/mongodbimage.webp";
import nodejsimage from "../assets/image/nodejsimage.png";
import cssimage from "../assets/image/cssimage.webp";
import skillbackgroundimage from "../assets/image/skillsectionbackgroundimage.webp";
import { useEffect, useState } from "react";
// import { observer } from "./utility/animateintersection.js";

import { url } from "../constant.js";

function Home() {

  const {pathname}= useLocation();

  useEffect(() => {
    // const  observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('animate-little');
    
    //     }
    //   });
    // },{
    //   threshold:0
    // });
    // const elementsToObserve = document.querySelectorAll(".test");
    // elementsToObserve.forEach((element) => {
    //   observer.observe(element);
    // });
    window.scrollTo(0, 0);
  }, [pathname]);

  // const circle1 = {
  //   display: "block",
  //   position: "absolute",
  //   top: "0%",
  //   left: "51%",
  //   width: "100px",
  //   height: "100px",
  //   margin: "-51px",
  //   background: "red",
  //   borderRadius: "51%",
  //   textAlign: "center",
  //   lineHeight: "100px",
  // };
  // const circle2 = {
  //   display: "block",
  //   position: "absolute",
  //   top: "28.33%",
  //   left: "93%",
  //   width: "100px",
  //   height: "100px",
  //   margin: "-51px",
  //   borderRadius: "51%",
  //   textAlign: "center",
  //   lineHeight: "100px",
  // };
  // const circle3 = {
  //   display: "block",
  //   position: "absolute",
  //   top: "73.66%",
  //   left: "93%",
  //   width: "100px",
  //   height: "100px",
  //   margin: "-51px",
  //   borderRadius: "51%",
  //   textAlign: "center",
  //   lineHeight: "100px",
  // };
  // const circle4 = {
  //   display: "block",
  //   position: "absolute",
  //   top: "100%",
  //   left: "51%",
  //   width: "100px",
  //   height: "100px",
  //   margin: "-51px",
  //   borderRadius: "51%",
  //   textAlign: "center",
  //   lineHeight: "100px",
  // };
  // const circle5 = {
  //   display: "block",
  //   position: "absolute",
  //   top: "73.66%",
  //   left: "9%",
  //   width: "100px",
  //   height: "100px",
  //   margin: "-51px",
  //   borderRadius: "51%",
  //   textAlign: "center",
  //   lineHeight: "100px",
  // };
  // const circle6 = {
  //   display: "block",
  //   position: "absolute",
  //   top: "28%",
  //   left: "8%",
  //   width: "100px",
  //   height: "100px",
  //   margin: "-51px",
  //   borderRadius: "51%",
  //   textAlign: "center",
  //   lineHeight: "100px",
  // };
  // const circle7 = {
  //   display: "block",
  //   position: "absolute",
  //   top: "28%",
  //   left: "8%",
  //   width: "100px",
  //   height: "100px",
  //   margin: "-51px",
  //   borderRadius: "51%",
  //   textAlign: "center",
  //   lineHeight: "100px",
  // };
  // const circle8 = {
  //   display: "block",
  //   position: "absolute",
  //   top: "28%",
  //   left: "8%",
  //   width: "100px",
  //   height: "100px",
  //   margin: "-51px",
  //   borderRadius: "51%",
  //   textAlign: "center",
  //   lineHeight: "100px",
  // };

  return (
    <div className="bg-zinc-600" id="outercontainer border">
      <Header />
      <div className=" md:flex w-3/4 m-auto border  " id="intro-section">
        <div
          className=" md:w-2/4  bg-cover bg-center bg-zinc-500 flex justify-center items-center rounded-r-lg test"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="w-2/4 h-2/4 test">
            <img id="binod" className=" rounded-full shadow-2xl" src={`${binod}`} alt="binod"/>
          </div>
        </div>

        {/* */}
        <div className=" flex justify-center items-center md:w-2/4 bg-zinc-600">
          <div>
            <br />
            <br />
            <div className=" md:mt-16 test">
              <h1 className=" text-3xl text-fuchsia-50 text-center">
                <b>I'm Binod Lamichhane</b>
              </h1>
              <h1 className="text-3xl text-center text-fuchsia-50">
                <b>A FullStack Developer</b>
              </h1>
              <p className="text-2xl text-center text-zinc-400">
                <strong>based on India</strong>
              </p>
            </div>
            <br />
            <br />
            <div className=" md:mb-36 md:px-5">
              <p className="  text-center text-[#FFE370]">
                I am probably the most passoniate developer you will ever get to
                work with.If you have a greate project that need some amazing
                skill,I'm your guy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-3/4 m-auto test" id="porjects-section">
        <p className=" text-[#FFE370] text-3xl text-center m-4">Projects</p>
        <div className=" md:flex justify-between">
          <div className=" md:w-1/4 h-1/4 border rounded-md hover:opacity-30">
            <img  src={`${mobileapp}`} alt="mobileapp" loading="lazy" />
            <p className=" text-center text-white">Amazon Clone</p>
          </div>
          <div className="md:w-1/4 h-1/4 border rounded-md hover:opacity-30">
            {/* <LazyLoadImage src={portfolio} alt="portfolio " height={300} width={300}/> */}
            <img  src={`${portfolio}`}  alt="portfolio" loading="lazy" />
            <p className=" text-center text-white">Portfolio</p>
          </div>
          <div className="md:w-1/4 h-1/4 border rounded-md hover:opacity-30">
            <img  src={`${cardgame}`}  alt="cardgame" loading="lazy" />
            <p className=" text-center text-white">flipcard game</p>
          </div>
          <div className="md:w-1/4 h-1/4 border rounded-md hover:opacity-30">
            <img  src={`${ecommerce}`} alt="ecommerce" loading="lazy"/>
            <p className=" text-center text-white">Ecommercesite</p>
          </div>
        </div>
      </div>
      <div className=" w-3/4 m-auto test" id="skill-section">
        <p className=" text-[#FFE370] text-center text-3xl mt-4">Skills</p>
        <div
          className=" flex  flex-wrap  mx-auto  justify-center  my-4 mb-8  test z-0 rounded-md"
          style={{ backgroundImage: `url(${skillbackgroundimage})` }}
        >
          <div>
            <img
              src={`${htmlimage}`} alt="html" loading="lazy"
              className=" w-[100px] h-[100px] md:w-[10vw] md:h-[10vw] rounded-full m-2 animate-spinner"
              // style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div>
            <img
              src={`${javascriptimage}`} alt="javascript" loading="lazy"
              className=" w-[100px] h-[100px] md:w-[10vw] md:h-[10vw] rounded-full m-2 animate-spinner "
              // style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div>
            <img
              src={`${nodejsimage}`} alt="nodejs" loading="lazy"
              className=" w-[100px] h-[100px] md:w-[10vw] md:h-[10vw] rounded-full m-2 animate-spinner"
              // style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div>
            <img
              src={`${mongodbimage}`} alt="mongodb" loading="lazy"
              className=" w-[100px] h-[100px] md:w-[10vw] md:h-[10vw] rounded-full m-2 animate-spinner "
              // style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div>
            <img
              src={`${sqlimage}`} alt="sqlimage" loading="lazy"
              className=" w-[100px] h-[100px] md:w-[10vw] md:h-[10vw] rounded-full m-2 animate-spinner"
              // style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div>
            <img
              src={`${reactjsimage}`} alt="reactjs" loading="lazy"
              className=" w-[100px] h-[100px] md:w-[10vw] md:h-[10vw] rounded-full m-2 animate-spinner"
              // style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>

          <img
            className=" w-[100px] h-[100px] md:w-[10vw] md:h-[10vw] rounded-full m-2 animate-spinner"
            src={`${dsaimage}`} alt="dsaimage" loading="lazy"
            // style={{ width: 100, height: 100 }}
          />
          <img
            className=" w-[100px] h-[100px] md:w-[10vw] md:h-[10vw] rounded-full m-2 animate-spinner"
            src={`${cssimage}`} alt='cssimg' loading="lazy"
            // style={{ width: 100, height: 100 }}
          />
        </div>
      </div>
      <div className="test">
      <ToastContainer/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

// className=" absolute w-16 h-16 bg-green-500 rounded-full"
