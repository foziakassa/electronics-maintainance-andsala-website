
// @ts-ignore
import { I18nProvider } from 'next-i18next';

import './[locale]/Service/Service.css'
import ServiceSample from "./[locale]/Service/ServiceSample/page";
import Contact from "./[locale]/Contact/page";
import About from "./[locale]/About/page";
import { useState } from "react";
import Modals from "./[locale]/Modals/page";
import Modale from "./[locale]/Modal/page";
import Homee from "./[locale]/Homee/page";
import TestinomialCard from "./[locale]/Testinomial/TestinomialCard";
import ProductSample from "./[locale]/Product/ProductSample/page";
import Testinomial from "./[locale]/Testinomial/page";
import ProductList from './[locale]/Product/ProductList/page';
import WeAre from './[locale]/WeAre/page';
import Service from './[locale]/Service/page';
import WhyUs from './[locale]/WhyUs/page';
import ServiceMain from './[locale]/ServiceMain/page';

export default function Home() {
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

  return (
    // <I18nProvider>
      <div className="">
        <Homee />
        <WeAre/>
        {/* <About /> */}
        {/* <Service/> */}
        
        <ServiceSample/>
        <ServiceMain/>

        <ProductSample/>
        
        <Testinomial/>
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
    // </I18nProvider>
  );
}