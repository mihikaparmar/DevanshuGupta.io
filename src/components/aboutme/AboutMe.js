import React, {useEffect} from "react";
import "./AboutMe.css";

import Aos from 'aos';
import 'aos/dist/aos.css'

import { Parallax } from 'react-parallax';


// importing pages



const AboutMe = () => {
    useEffect(()=>{
        Aos.init({duration:2000})

    },[]);

  
  return (
    <>

    <div className="parag1">
        <h1 data-aos="fade-up">About Me</h1>
    </div>

    <div  className="parag2">
        <p data-aos="fade-up">Hardworking College Student seeking employment. Bringing forth a motivated attitude and a<br/>
variety of powerful skills. Adept in various social media platforms and office technology<br/>
programs. Committed to utilizing my skills to further the mission of an organization . A skilled<br/>
Web Developer, a Competitive Coder with three star rating at codechef(max.1703) and (max.<br/>
932) on codeforces.</p>
    </div>
    <div className="parag3">
        <h3 data-aos="fade-down">Beneath every excuse lies a fear. Practice being fearless. </h3>
        <div className="btn" >
            <button data-aos="fade-left" className="glow-on-hover1" type="button">Download My Resume!</button>
            </div>
    </div>
    

            <div className="image">
                <img  data-aos="ffade-up" src="/images/devu.png" alt="" /></div>


    


      
        
         
         
          
        
          
    </>
  );
};

export default AboutMe;