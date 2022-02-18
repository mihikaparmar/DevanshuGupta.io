import React ,{useEffect}from 'react'
import "./ProjectSection.css";
import Aos from 'aos';
import 'aos/dist/aos.css'





const ProjectSection = () => {
    
        useEffect(()=>{
            Aos.init({duration:1000})
    
        },[]);
  return (
    <div>
        <div className="section-block">
            <div className="flex-container">
        <div  data-aos="fade-right" className="card">
      <img src="/images/dev.png" alt="Avatar"/>
  <div className="container">
    <h4><b>IIITN StudentHelp.io</b></h4> 
    <p>A MERN stack project with user authentication system and assesment of JWT
tokens for the user to access resources and get his creditionals saved in browser
history.</p> 
  </div>
  
  
  </div>
  <div className="card" data-aos="fade-down">
      <img src="/images/dev.png" alt="Avatar"/>
  <div className="container">
    <h4><b>Pharmacy.com</b></h4> 
    <p>A full stack project with frontend project</p> 
  </div>
  
  
  </div>
   <div className="card"  data-aos="fade-left">
      <img src="/images/dev.png" alt="Avatar"/>
  <div className="container">
    <h4><b>Pinterest Clone
</b></h4> 
    <p>A frontend Project made using React.js (Material UI)</p> 
  </div>
  
  
  </div>
</div>

       

        </div>
        
    </div>
  )
}

export default ProjectSection