import { motion } from "framer-motion";
import { useEffect } from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const transition = (OgComponent) => {
  return () => {
    useEffect(() => {
      scrollToTop();
    }, []);
    return (
      <>
        <OgComponent />
        <motion.div className="show-in" initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} />

        <motion.div className="show-out" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} />
      </>
    );
  };
};

export default transition;
