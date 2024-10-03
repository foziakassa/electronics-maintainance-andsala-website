import "./Card.css";
import useSwr from "swr";
import TestinomialCard from "./TestinomialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CollectionQuery } from "../../../Model/collection-query.model";


import fetcher from "@/shared/utils/fetcher";
import {useLocale, useTranslations} from 'next-intl'

export default function Testinomial() {


  const t = useTranslations('testinomial')
  const locale = useLocale()
  const collection: CollectionQuery = { 
    locale:locale, 
  }
  const { data, isLoading, error } =  useSwr(
    { url: "/portal-interactions/get-testimonials", params: collection },
    fetcher
  );
  

  if (isLoading) return <div className="">Loading...</div>;
  if (error) return <div className="">error</div>;
  if (data) {
    console.log(data.data[0]);
    // data.data[0].message
    return (
      <div className="">
        <h1
        className="text-teal-700 text-center text-4xl 
        font-bold 
        p-2 bg-opacity-40 rounded-sm "
        style={{ fontFamily: 'Open Sans' }}
      >
        {t("client")}{" "}
      </h1>

        <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  // scrollbar={{ draggable: true }}
  className="justify-center" // add this class
  
  
  
  breakpoints={{
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  }}
>
  {data.data.map((item: any, index: number) => (
    <SwiperSlide key={item.id} className="">
      <div className="flex justify-center">
      <TestinomialCard testimonialData={item} key={index} />

      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    );
  }
}