import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { createContext, useContext, useState } from "react";
import Main from "./main";

import { AnimatePresence } from "framer-motion";
import ContactFooter from "../components/contact-footer";
import ServiceCards from "../components/service-cards";
import ProjectCards from "../components/project-cards";

const NavClickContext = createContext({
  hasNavClicked: false,
  setHasNavClicked: () => {},
});

export const useNavClick = () => useContext(NavClickContext);

export const NavClickProvider = ({ children }) => {
  const [hasNavClicked, setHasNavClicked] = useState(false);

  return <NavClickContext.Provider value={{ hasNavClicked, setHasNavClicked }}>{children}</NavClickContext.Provider>;
};

// Create the context
const ClickHomepage = createContext({
  hasHomepageClicked: false,
  setHasHomepageClicked: () => {},
});
// Custom hook to use the context
export const useHomeClick = () => {
  return useContext(ClickHomepage);
};
// Provider component
export const HomepageClickProvider = ({ children }) => {
  const [hasHomepageClicked, setHasHomepageClicked] = useState(false);
  return (
    <ClickHomepage.Provider value={{ hasHomepageClicked, setHasHomepageClicked}}>
      {children}
    </ClickHomepage.Provider>
  );
}



const AnimatedRoutes = () => {
  const location = useLocation();
  const { hasNavClicked } = useNavClick();

  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/services" element={<ServiceCards></ServiceCards>}></Route>
        <Route path="/portfolio" element={<ProjectCards></ProjectCards>}></Route>
        <Route path="/contact" element={<ContactFooter></ContactFooter>}></Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <HomepageClickProvider>
    <NavClickProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </NavClickProvider>
    </HomepageClickProvider>
  );
};

export default App;


