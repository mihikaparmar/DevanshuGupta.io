import React, {useEffect} from "react";
import "./Hero.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextLoop from "react-text-loop";
import Aos from 'aos';
import 'aos/dist/aos.css'


// importing pages



const Hero = () => {

    
        useEffect(()=>{
            Aos.init({duration:2000})
    
        },[]);
  
  return (
    <>
      
        <div className="app-container">
        <div class="block">
        <div className="imgg">
              <img  data-aos="fade-up " src="/images/devu5.png" alt="" />
          </div>
        </div>
            <div className="para">
                <h1 data-aos="fade-up">Hello,<br/></h1>
            </div>
            <div className="para2">
                <h1 data-aos="fade-down" >I am Devanshu Gupta,<br/></h1>
            </div>
            <div  data-aos="fade-down" className="para3">
            <TextLoop>
        <span data-aos="fade-up">  A Developer</span>
        <span data-aos="fade-up">A Competitive Coder</span>
        <span data-aos="fade-up">A Machine Learning Enthusiast</span>
        <span data-aos="fade-up">With Entrepreneal Thinking</span>

         </TextLoop>{" "}
            </div>

            <div className="btn">
            <button data-aos="fade-left" className="glow-on-hover" type="button">HOVER ME, TO CONTACT ME!</button>
            </div>
         
         
        
          </div>
          
    </>
  );
};

export default Hero;