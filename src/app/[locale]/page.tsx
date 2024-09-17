'use client'
import ProductSample from "./Product/ProductSample/page";
import Contact from "./Contact/page";
import Homee from "./Homee/page";
import WeAre from "./WeAre/page";
import WhyUs from "./WhyUs/page";
import ServiceSample from "./Service/ServiceSample/page";
import Testinomial from "./Testinomial/page";
import Modale from "./Modal/page";
import Modals from "./Modals/page";
import { useState } from "react";
import Demo from "../Dashbord/Demo";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import Dashbord from "../Dashbord/page";
import HomePage from "../HomePage/page";
import Demo2 from "../Dashbord/Demo2";


export default function Main(){

  const [visible, setVisible] = useState(false);
  function showModals() {
    setVisible(true);
  }
  function handleOks() {
    setVisible(false);
  }
  function handleCancels() {
    setVisible(false);
  }


  const [visibles, setVisibles] = useState(false);
  function showModalss() {
    setVisibles(true);
  }
  function handleOkss() {
    setVisibles(false);
  }
  function handleCancelss() {
    setVisibles(false);
  } 
  return(
    <div className="">
      {/* <Header/> */}
      {/* <HomePage/> */}
      <Homee />
        <WeAre/>
        <ServiceSample/>
        <ProductSample/>
        <MantineProvider>
        {/* <Demo2/> */}

        </MantineProvider>
        <Testinomial/>
        
        {/* <MantineProvider>
        <Demo/>
        <Dashbord/>
        </MantineProvider> */}

        <WhyUs/>
        <Contact />
        <Modals
          visibless={visibles}
          showModals={showModalss}
          handleCancels={handleCancelss}
          handleOks={handleOkss}
        />
        <Modale
          visibles={visible}
          showModal={showModals}
          handleCancel={handleCancels}
          handleOk={handleOks}
        />
      </div>

      
   
  )
}