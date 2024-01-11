import React, { useState } from "react";
import SideNav from "../../components/menu-button";
import PageLayout from "../../components/page-layout";
import Header from "../../components/header";
import arrow from "../../assets/arrow.png";
import Gear from "../../components/gear";
import gear from "../../assets/gear_black.png";
import arrow_big from "../../assets/arrow_big.png";
import Heading from "../../components/Heading";
import Footer from "../../components/footer";
import MenuButton from "../../components/menu-button";
import LangueBar from "../../components/langue-bar";
import SitePlan from "../../components/site-plan";

import HomePage from "../../components/home-page";
// import LightBackground from "../../components/light-bg";
import AnimatedBackground from "../../components/light-bg";


const Main = () => {
  return (
  // <AnimatedBackground>
      <HomePage></HomePage>
      // </AnimatedBackground>
  );
};

export default Main;
