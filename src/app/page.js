import React from "react";
import HomeSlider from "./HomeSlider/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Testimonials from "./Testimonials/page";
import Faq from "./Faq/page";
import Services from "./service/page"; // Ensure this path is correct
import SIP from "./sip/page";
import SIPGraph from "./sipgraph/page";
import TabItem from "./tabitem/page";
import TradeOnOur from "./tradeonour/page";

const Page = () => {
  return (
    <>
      <HomeSlider />
      <SIPGraph />
      <TradeOnOur />
      <SIP />
      <Services />
      <TabItem />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Page;
