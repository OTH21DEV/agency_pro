import React, { useEffect, useRef } from 'react';
import { cn as bem } from "@bem-react/classname";
import "./style.css";

const Nav = () => {
  const cn = bem("Nav-wrapper");


  const navRef = useRef(null);

  // useEffect(() => {
  //   // const handleScroll = () => {
  //   //   if (navRef.current) {
  //   //     const stickyOffsetTop = navRef.current.offsetTop;
  //   //     if (window.pageYOffset > stickyOffsetTop) {
  //   //       navRef.current.classList.add(cn('--sticky'));
         
          
  //   //     } else {
  //   //       navRef.current.classList.remove(cn('--sticky'));
     
  //   //     }
  //   //   }
  //   // };

  //   // window.addEventListener('scroll', handleScroll);
  //   // return () => {
  //   //   window.removeEventListener('scroll', handleScroll);
  //   // };
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY ) { // Replace 'threshold' with your intended value
  //         document.querySelector('.Nav-wrapper').classList.add('Nav-wrapper---sticky');
  //     } else {
  //         document.querySelector('.Nav-wrapper').classList.remove('Nav-wrapper---sticky');
  //     }
  // });
  
  // }, []);
//   useEffect(() => {
//     const handleScroll = () => {
//         if (window.scrollY) { // You could use a threshold value here
//             document.querySelector('.Nav-wrapper').classList.add('Nav-wrapper---sticky');
//         } else {
//             document.querySelector('.Nav-wrapper').classList.remove('Nav-wrapper---sticky');
//         }
//     };

//     // Add event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up event listener
//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);
//   console.log(cn('--sticky')); 


  return (
    <ul className={cn("")} ref={navRef}>
      <li
        onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".Work-flow-section").offsetTop,
            behavior: "smooth",
          });
        }}
      >
        How we work
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
 
          window.scrollTo({
            top: document.querySelector(".services-section").offsetTop,
            behavior: "smooth",
          });
        }}
      >
        Services
      </li>
      <li  onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".Slider").offsetTop,
            behavior: "smooth",
          });
        }}>Portfolio</li>
      <li onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".Contact").offsetTop,
            behavior: "smooth",
          });
        }}>Contact</li>
    </ul>
  );
};

export default Nav;
