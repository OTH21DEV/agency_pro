import "./style.css";
import { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';



const Loader = () => {



  const [isLoaderFinished, setIsLoaderFinished] = useState(false);
  const [isSlidingUp, setIsSlidingUp] = useState(false); // To manage the slide up state
  const [numbers, setNumbers] = useState([25, 89, 100]);
  const [numberIndex, setNumberIndex] = useState(0);
  const numberRef = useRef();
  const loaderContainerRef = useRef();

  // Function to generate two random numbers and add 100
  const generateRandomNumbers = () => {
    let first = Math.floor(Math.random() * (98 - 1)) + 1;
    let second = Math.floor(Math.random() * (98 - first)) + first + 1;

    return [first, second, 100].sort((a, b) => a - b);
  };

  useEffect(() => {
    //need to perform the top to scroll when reload -slide main section after the loader
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Reset the loader display when the component mounts
    loaderContainerRef.current.style.display = "flex";

    loaderContainerRef.current.classList.remove("slide-up");
    document.querySelector(".container").classList.remove("slide-in");
    // Set new random numbers when the component mounts
    setNumbers(generateRandomNumbers());
   
    const handleAnimationEnd = () => {
      if (numberIndex < 2) {
        setNumberIndex(prevIndex => prevIndex + 1); // Move to the next number
      } else {
        setIsSlidingUp(true);
        setIsLoaderFinished(true); // Trigger the end of the loading sequence
        
      }
    };
    numberRef.current.addEventListener("animationend", handleAnimationEnd);

    // Clean up event listener
    return () => {
      numberRef.current.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [numberIndex]);



  useEffect(() => {
    const showPageContainer = document.querySelector(".container");
const navBar =  document.querySelector(".Nav-bar-wrapper")
const heading = document.querySelector(".Heading")
const pro = document.querySelector(".Heading-pro")
    if (isSlidingUp) {
      loaderContainerRef.current.classList.add("slide-up");

      let timerId;

      const transitionEndHandler = () => {
        // Instead of waiting for the transition to end, start a timer to slide in the container earlier
        const loaderTransitionDuration = getComputedStyle(loaderContainerRef.current).transitionDuration;
        // Convert seconds to milliseconds and decrease it slightly to slide in the container before the loader finishes
        const earlyStartMs = parseFloat(loaderTransitionDuration) * 1000 - 200; // You can adjust the 200ms delay as needed

        // Schedule sliding in the main content before the loader finishes
        timerId = setTimeout(() => {
          loaderContainerRef.current.style.display = "none"; // Hide the loader
          showPageContainer.classList.add("slide-in"); // Slide in the main content
//test for animation
          navBar.classList.add("visible"); // Slide in the main content

          
          navBar.addEventListener('transitionend', () => {
            // Only after the NavBar has finished transitioning, show the Heading
            heading.classList.add("visible");
      
           pro.classList.add("visible");
          });
     

        }, earlyStartMs);
      };

      // Listen for the start of the transition, not the end
      loaderContainerRef.current.addEventListener('transitionstart', transitionEndHandler);

      // Clean up both event listener and timeout
      return () => {
        clearTimeout(timerId);
        loaderContainerRef.current.removeEventListener("transitionstart", transitionEndHandler);
      };
    }
  }, [isSlidingUp]);

  const getClassName = () => {
    switch (numbers[numberIndex]) {
      case numbers[1]:
        return "from-middle-position";
      case numbers[2]:
        return "from-end-position";
      default:
        return "from-start-position";
    }
  };

  return (
    <div ref={loaderContainerRef} className="loader-container">
      <div>
        <h2>Web Accuracy Agency</h2>
        <p>© 2024 ALL RIGHTS RESERVED.</p>
      </div>
      <span ref={numberRef} className={`animated-number ${getClassName()}`}>
        {numbers[numberIndex]}
      </span>
    </div>
  );
};

export default Loader;


// work but not add slide to container 

// const Loader = () => {
//   const [isLoaderFinished, setIsLoaderFinished] = useState(false);
//   const [numbers, setNumbers] = useState([25, 89, 100]);
//   const [numberIndex, setNumberIndex] = useState(0);
//   const numberRef = useRef();
//   const loaderContainerRef = useRef();

//   // Function to generate two random numbers and add 100
//   const generateRandomNumbers = () => {
//     let first = Math.floor(Math.random() * (98 - 1)) + 1;
//     let second = Math.floor(Math.random() * (98 - first)) + first + 1;

//     return [first, second, 100].sort((a, b) => a - b);
//   };

//   useEffect(() => {
//     // Ensure the main container is ready for the transition
//     const showPageContainer = document.querySelector(".container");
//     showPageContainer.classList.remove("slide-in");
    
//     // Reset the loader state and display
//     setNumbers(generateRandomNumbers());
//     setIsLoaderFinished(false);
//     setNumberIndex(0);
//     loaderContainerRef.current.style.display = "flex";
//     loaderContainerRef.current.classList.remove("slide-up");

//     const handleAnimationEnd = () => {
//       if (numberIndex < 2) {
//         setNumberIndex(prevIndex => prevIndex + 1); // Move to the next number
//       } else {
//         setIsLoaderFinished(true); // Trigger the end of the loading sequence
//       }
//     };

//     numberRef.current.addEventListener("animationend", handleAnimationEnd);

//     return () => { // Clean up event listener
//       numberRef.current.removeEventListener("animationend", handleAnimationEnd);
//     };
//   }, []);

//   useEffect(() => {
//     if (isLoaderFinished) {
//       loaderContainerRef.current.classList.add("slide-up");
      
//       const transitionEndHandler = () => {
//         loaderContainerRef.current.style.display = "none"; // Hide the loader
//         document.querySelector(".container").classList.add("slide-in"); // Slide in the main content
//       };

//       loaderContainerRef.current.addEventListener('transitionend', transitionEndHandler);
      
//       return () => { // Clean up event listener
//         loaderContainerRef.current.removeEventListener("transitionend", transitionEndHandler);
//       };
//     }
//   }, [isLoaderFinished]);

//   const getClassName = () => {
//     switch (numbers[numberIndex]) {
//       case numbers[1]:
//         return "from-middle-position";
//       case numbers[2]:
//         return "from-end-position";
//       default:
//         return "from-start-position";
//     }
//   };

//   return (
//     <div ref={loaderContainerRef} className="loader-container">
//       <div>
//         <h2>Web Accuracy Agency</h2>
//         <p>© 2024 ALL RIGHTS RESERVED.</p>
//       </div>
//       <span ref={numberRef} className={`animated-number ${getClassName()}`}>
//         {numbers[numberIndex]}
//       </span>
//     </div>
//   );
// };

// export default Loader;



// const Loader = ({onLoadingComplete }) => {
//   const [isLoaderFinished, setIsLoaderFinished] = useState(false);
//   const [numbers, setNumbers] = useState([25, 89, 100]);
//   const [numberIndex, setNumberIndex] = useState(0);
//   const numberRef = useRef();
//   const loaderContainerRef = useRef();
//   const showPageContainer = document.querySelector(".container");

//   // Function to generate two random numbers and add 100
//   const generateRandomNumbers = () => {
//     let first = Math.floor(Math.random() * (98 - 1)) + 1;
//     let second = Math.floor(Math.random() * (98 - first)) + first + 1;

//     return [first, second, 100].sort((a, b) => a - b);
//   };

//   useEffect(() => {
//     // const showPageContainer = document.querySelector(".container");
//     // Reset the loader state and display
//     setNumbers(generateRandomNumbers());
//     setIsLoaderFinished(false);
//     setNumberIndex(0);
//     loaderContainerRef.current.style.display = "flex";
//     loaderContainerRef.current.classList.remove("slide-up");

//   const handleAnimationEnd = () => {
//     console.log("Current numberIndex before update:", numberIndex);
  
//     setNumberIndex((prevIndex) => {
//       const newIndex = prevIndex + 1;
//       console.log("Updating number index to:", newIndex);
      
//       if (newIndex < numbers.length) {
//         return newIndex;
//       } else {
//         console.log("Setting isLoaderFinished to true");
//         setIsLoaderFinished(true); // End loading sequence outside setState
//         return prevIndex; // Return the previous index if it's the last item
//       }
//     });
//   };
//   numberRef.current.addEventListener("animationend", handleAnimationEnd);

//   console.log("Added event listener for animationend");

//   return () => { // Clean up event listener
//     console.log("Removing event listener for animationend");
//     numberRef.current.removeEventListener("animationend", handleAnimationEnd);
//   };
//   }, [numbers.length]);

//   useEffect(() => {
//     if (isLoaderFinished) {
//       console.log('Adding "slide-up" to loaderContainerRef');
//       loaderContainerRef.current.classList.add("slide-up");

//       // Use callback to notify parent component that loading is finished
//       onLoadingComplete(true);

//       const transitionEndHandler = () => {
//         loaderContainerRef.current.style.display = "none"; // Hide the loader
      
//         // Clean up the event listener
//         loaderContainerRef.current.removeEventListener("transitionend", transitionEndHandler);
//       };

//       loaderContainerRef.current.addEventListener('transitionend', transitionEndHandler);

//       return () => {
//         loaderContainerRef.current.removeEventListener('transitionend', transitionEndHandler);
//       };
//     }
    
//     // If loading is not yet finished, we can notify the parent that it can reset any necessary styles.
//     else {
//       console.log('Loader is not finished yet');
//       onLoadingComplete(false);
//     }
//   }, [isLoaderFinished, onLoadingComplete]);



//   const getClassName = () => {
//     switch (numbers[numberIndex]) {
//       case numbers[1]:
//         return "from-middle-position";
//       case numbers[2]:
//         return "from-end-position";
//       default:
//         return "from-start-position";
//     }
//   };

//   return (
//     <div ref={loaderContainerRef} className="loader-container">
//       <div>
//         <h2>Web Accuracy Agency</h2>
//         <p>© 2024 ALL RIGHTS RESERVED.</p>
//       </div>
//       <span ref={numberRef} className={`animated-number ${getClassName()}`}>
//         {numbers[numberIndex]}
//       </span>
//     </div>
//   );
// };

// export default Loader;
