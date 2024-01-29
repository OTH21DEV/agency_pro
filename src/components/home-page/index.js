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
// import SitePlan from "../../components/site-plan";
import Slogan from "../slogan";
import TableContent from "../table-content";
// import WorkFlowCard from "../work-flow-card";
import WorkFlow from "../work-flow";
import NavBar from "../nav-bar";
import ServiceCards from "../service-cards";
import ProjectCards from "../project-cards";
import Contact from "../contact";
import ScrollTop from "../scroll-top";
import "./style.css";

const HomePage = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const goToPage = (index) => {
    setActivePageIndex(index);
    setIsClicked(true);
  };

  return (
    <div className="container">

      <div className="page">
        <PageLayout>
          <NavBar></NavBar>
          {/* <LangueBar /> */}
          <Heading text="designs and develops stunning online experiences for Enterprises, Startups  & E-commerce." />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="arrow-big">
              <img src={arrow_big} alt=""></img>
            </div>
            <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "flex-end", marginRight: "60px", marginTop: "60px" }}>

              <Slogan></Slogan>
            </div>
          </div>
          <Gear icon={gear} />
        </PageLayout>
        <Footer />
      </div>



      <WorkFlow></WorkFlow>
  
      <ServiceCards></ServiceCards>
      <ProjectCards></ProjectCards>
      <Contact></Contact>
      <ScrollTop></ScrollTop>
    </div>
  );
};

export default HomePage;
