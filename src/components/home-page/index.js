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
import Slogan from "../slogan";
import TableContent from "../table-content";
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
      {/* <div className="slider" style={{ transform: `translateX(-${activePageIndex * 100}%)` }}> */}
        {/* Page One */}
        <div className="page">
          
            <PageLayout>
              <LangueBar />
              <Heading text="designs and develops stunning online experiences for Enterprises, Startups  & E-commerce." />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="arrow-big">
                  <img src={arrow_big} alt=""></img>
                </div>
                <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "flex-end", marginRight: "60px", marginTop: "60px" }}>
                  {/* <div>
                  {" "}
                  
                  <MenuButton isClicked={isClicked} onClick={goToPage} />
                </div> */}
                  <Slogan></Slogan>
                </div>
              </div>
              <Gear icon={gear} />
            </PageLayout>
            <Footer />
          
        </div>

        {/* Page Two */}
        {/* <div className="page">
          <SitePlan />
        </div> */}
      {/* </div> */}
      <TableContent />
    </div>
  );
};

export default HomePage;
