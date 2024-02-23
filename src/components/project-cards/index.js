import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "../project-card";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

import phone_frame from "../../assets/phone_frame.png";
import screen_image from "../../assets/ecran_mobile.png";
import dashboard_screen from "../../assets/dasboard_screen.png";
import rest_screen from "../../assets/rest_screen.png";
import bank_screen from "../../assets/bank_screen.png";
import immo_screen from "../../assets/immo_screen.png";
import arrow_slider from "../../assets/arrow-slider.png";
import transition from "../../transition";
import NavBar from "../nav-bar";
import { Link, useLocation } from "react-router-dom";
import { useNavClick } from "../../app";
// const ProjectCards = () => {
//   const cn = bem("Slider");

//   const projects = [
//     {
//       id: 0,
//       description: [
//         " Banking App Landing Page : Crafted using React and Redux for seamless state management. This platform ensures secure access through a robust user token authentication system. Experience smooth financial operations with real-time API connectivity and enjoy compatibility across all devices. ",
//       ],
//       backgroundImage: bank_screen,
//     },
//     {
//       id: 1,
//       description: [
//         " Fitness Tracking Dashboard :  React-crafted dashboard is the ultimate hub for monitoring the fitness activities. It presents a user-friendly landing page that encapsulates rich data from various APIs. Visualize the progress, set goals, and analyze detailed activity metrics. ",
//       ],
//       backgroundImage: dashboard_screen,
//     },
//     {
//       id: 2,
//       description: [
//         " Restaurant Landing Page : Discover culinary excellence where React's dynamic capabilities meet breathtaking animations. Delight in a sumptuous interface that brings the menu to life, creating an immersive experience as you navigate through the offerings. ",
//       ],
//       backgroundImage: rest_screen,
//     },
//     {
//       id: 3,
//       description: [
//         " Corporate Network App : A secure and streamlined platform designed to enhance corporate communications. Built with React, Node.js, Express, and MySQL, the app empowers teams to manage and discuss internal publications with ease. Experience efficient content management and real-time collaboration in one intuitive interface.",
//       ],
//       backgroundImage: screen_image,
//     },
//     {
//       id: 4,
//       description: [
//         " Real Estate App Landing Page : React-powered landing page features a stunning gallery of properties, responsive design for all devices, and advanced search filters to streamline the search.",
//       ],
//       backgroundImage: immo_screen,
//     },
//     // {
//     //   id:5,
//     //   description:[" Fitness Tracking Dashboard : the React-crafted dashboard is the ultimate hub for monitoring your fitness activities. It presents a user-friendly landing page that encapsulates rich data from various APIs. Visualize your progress, set goals, and analyze detailed activity metrics — all at your fingertips. "],
//     //   backgroundImage: dashboard_screen,
//     // },
//   ];

//   const [active, setActive] = useState(3);

//   const handlePrevClick = () => {
//     setActive((prevActive) => (prevActive - 1 + projects.length) % projects.length);
//     console.log('Active before:', active);
//   };

//   const handleNextClick = () => {
//     setActive((prevActive) => (prevActive + 1) % projects.length);
//     console.log('Active after:', active);
//   };



//   useEffect(() => {
//     let phoneFrames = document.querySelectorAll(".phone-frame");
//     console.log(phoneFrames[active]);

//     const load = () => {
//       phoneFrames[active].style.transform = `none`;
//       phoneFrames[active].style.zIndex = 1;
//       phoneFrames[active].style.filter = "none";
//       phoneFrames[active].style.opacity = 1;

//       let stt = 0;
//       for (let i = active + 1; i < phoneFrames.length; i++) {
//         stt++;
//         // applyStylesToFrame(phoneFrames[i], 120 * stt, -stt, 1 - 0.2 * stt);
//         phoneFrames[i].style.transform = `translateX(${132 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
//         phoneFrames[i].style.zIndex = -stt;
//         phoneFrames[i].style.filter = "blur(1px)";
//         phoneFrames[i].style.opacity = stt > 2 ? 0 : 0.6;
//       }

//       stt = 0;
//       for (let i = active - 1; i >= 0; i--) {
//         stt++;
//         // applyStylesToFrame(phoneFrames[i][i], -120 * stt, -stt, 1 - 0.2 * stt);
//         phoneFrames[i].style.transform = `translateX(${-132 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
//         phoneFrames[i].style.zIndex = -stt;
//         phoneFrames[i].style.filter = "blur(1px)";
//         phoneFrames[i].style.opacity = stt > 2 ? 0 : 0.6;
//       }
//     };
//     load();
//   }, [active]);

//   return (
//     // <section>
//     <div className={cn("")}>
 

//       {projects.map((project, index) => (
//         <ProjectCard   id={project.id} active={active} key={project.id} screen_image={project.backgroundImage} phone_frame={phone_frame} description={project.description} />
//       ))}
 
//       <div id="prev" onClick={handlePrevClick}>
//         <img src={arrow_slider} alt=""></img>
//       </div>

//       <div id="next" onClick={handleNextClick}>
//         <img src={arrow_slider} alt=""></img>
//       </div>

//     </div>
//     //  </section>
//   );
// };

// export default ProjectCards;

// const ProjectCards = () => {
//   let projects = ["P", "R", "O", "J", "E", "C", "T", "S"]
//   return(
//     <section className="projects-section">

//       <ProjectCard></ProjectCard>
//     </section>
//   )
// }




const ProjectCards = () => {
  let projects = ["P", "R", "O", "J", "E", "C", "T", "S"]
  const location = useLocation();

  const { hasNavClicked} = useNavClick(); 
  useEffect(() => {
    const navBar = document.querySelector(".Nav-bar-wrapper");
  
    let timer;
  
    if (location.pathname === '/portfolio') {
      timer = setTimeout(() => {
        if(navBar) {
         
          navBar.classList.add('visible');
  
        
        }
      }, 500); 
    } 
    // else if (navBar) {
    
    //   navBar.classList.remove('visible');
     
    // }
  
    return () => clearTimeout(timer);
  }, [location.pathname]);
  

  return (
   
    <section className="projects-section">
  { hasNavClicked ?<NavBar />:""}
       <div className="services-wrapper">
         <h2>03/</h2>
         <span className="title-wrapper">
           {projects.map((lettre, key) => {
             const style = { transitionDelay: `${key * 0.07}s` };
             return (
               <span key={key} className="services-title" style={style}>
                 {lettre}
               </span>
             );
           })}
         </span>
       </div>
       <div className="project-cards-heading">
         <h3>PROJECTS</h3>
         <p>Browse our handpicked selection of latest web projects, each a testament to our technical skill and creative innovation. </p>
       </div> 
    <ProjectCard></ProjectCard>
    </section>
   
  )
}


export default transition(ProjectCards)

//  {/* <div className="services-wrapper">
//         <h2>03/</h2>
//         <span className="title-wrapper">
//           {projects.map((lettre, key) => {
//             const style = { transitionDelay: `${key * 0.07}s` };
//             return (
//               <span key={key} className="services-title" style={style}>
//                 {lettre}
//               </span>
//             );
//           })}
//         </span>
//       </div>
//       <div className="project-cards-heading">
//         <h3>PROJECTS</h3>
//         <p>Browse our handpicked selection of latest web projects, each a testament to our technical skill and creative innovation. </p>
//       </div> */}