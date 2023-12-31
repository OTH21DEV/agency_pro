import React from "react";
import SideNav from "../../components/side-nav";
import PageLayout from "../../components/page-layout";
import Header from "../../components/header";
import arrow from "../../assets/arrow.png";
import Gear from "../../components/gear";
import gear from "../../assets/gear_black.png";
import arrow_big from "../../assets/arrow_big.png";
import Heading from "../../components/Heading";
import Footer from "../../components/footer";
const Main = () => {
  return (
    <>
    <PageLayout>
      <SideNav></SideNav>
      <Header
        title={
          <>
            Strategy, Design, Solution
            <br />
            Development
          </>
        }
        icon={arrow}
      ></Header>{" "}
      <Heading text={"designs and develops stunning online experiences. "} icon={arrow_big}></Heading>
      <Gear icon={gear}></Gear>
      <Footer></Footer>
    </PageLayout>
    </>
  );
};

export default Main;
