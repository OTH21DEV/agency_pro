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
import "./style.css";


const HomePage = () => {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    
    
    const goToPage = (index) => {
      setActivePageIndex(index);
      setIsClicked(true)
    };
  
    return (
      <div className="container">
        <div className="slider" style={{ transform: `translateX(-${activePageIndex * 100}%)` }}>
          {/* Page One */}
          <div className="page">
            <>
              <LangueBar />
              <PageLayout>
                <Heading text="designs and develops stunning online experiences." />
                <MenuButton isClicked={isClicked} onClick={goToPage}/>
                <Gear icon={gear} />
              </PageLayout>
              <Footer />
            </>
          </div>
  
          {/* Page Two */}
          <div className="page">
            <SitePlan />
          </div>
        </div>
      
      </div>
    );
  }


export default HomePage;
