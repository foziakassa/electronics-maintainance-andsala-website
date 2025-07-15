
"use client";
import React, { useState, useEffect, useContext } from "react";
import Card from './Card/Card'
import useSwr from "swr";
import fetcher from "@/shared/utils/fetcher";
import { CollectionQuery } from "@/Model/collection-query.model";

import { useLocale, useTranslations } from "next-intl";



interface ServiceData {
  name: string;
  description: string;
  coverPage: string;
}


const Service=()=>{
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [selectedService, setSelectedService] = React.useState<ServiceData | null>(null);
  const t = useTranslations('Header')
  const locale = useLocale()
  const collection: CollectionQuery = {
    top: perPage,
    skip: (currentPage - 1) * perPage,
    locale: locale,
    orderBy: [
      {
        field: "updatedAt",
        direction: "desc",
      },
    ],
  };
 
  const {
    data: services,
    isLoading,
    error,
  } = useSwr(
    { url: "/portal-product-and-services/get-services", params: collection },
    fetcher
  );

  useEffect(() => {
    if (services && services.count) {
      const totalPage = Math.ceil(services.count / perPage);
      setTotalPage(totalPage);
    }
  }, [perPage, services]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  return (
    <div className=""> 
     
      <div className="h-full flex px-2 mx-10 -my-14">
        <div
          id="service"
          className="flex flex-col justify-center gap-40 pt-24
          border my-20 rounded-md

          border-teal-50
          shadow-lg
          bg-teal-50 
          "
          style={{ overflowX: "hidden", overflowY: "hidden" }}
        >
          <h1 className="text-5xl font-bold">
            <section>
              <div className="max-w-6xl mx-8 md:mx-20 lg:mx-10 xl:mx-auto pt-12  ">
                <div className="  md:mb-6 md:text-center">
                  <div>
                    <h1
                      className="text-4xl -mt-20 font-bold text-teal-700 relative"
                    >
                    { t( "service")}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5 px-16 ">
                {services.data.map((item: ServiceData, index: number) => (
                  <div className="flex-0 w-full justify-center" key={index}>
                    <Card
                      key={index}
                      serviceData={item}
                      onClick={() => handleServiceClick(item)}
                    />
                  </div>
                ))}
              </div>
              <div className="join my-7  ml-40">
                {Array.from({ length: totalPage }).map((_, index) => (
                  <button
                    key={index}
                    className={`join-item btn mx-2 ${
                      currentPage === index + 1 ? "btn-active" : ""
                    } text-black bg-teal-50 hover:bg-teal-800 hover:text-white  p-3 rounded`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </section>
          </h1>
        </div>

      <div className="flex-3 mt-20 pt-28 bg-white p-4 mb-20 ">
        {selectedService ? (
          <div>
            <div
              className="relative  flex w-[800px] h-full
              flex-col rounded-xl bg-white bg-clip-border
               text-gray-700   mx-40
               hover:translate-x-1 
               shadow-md
               "
            >
              <div
                className="relative mx-auto -mt-12 h-64 w-96
              overflow-hidden rounded-xl text-white 
              shadow-xl bg-cover bg-center
              "
              >
                <img
                  className="object-fill h-48 w-full "
                  src={selectedService?.coverPage}
                  alt="Bonnie Green image"
                />
              </div>
              <div className="p-6 ">
              <h2 className=" font-bold mb-2 text-teal-800
                text-3xl
                 ">
                  {selectedService.name}
                </h2>
                <p
                  className="block font-sans 
        xl:text-lg lg:text-base md:text-sm sm:text-xs
         
        font-light leading-relaxed 
        text-inherit antialiased
        "
                >
                  {selectedService?.description}
                </p>
              </div>
             
              <div className=""></div>
            </div>
          </div>
        ) : (
          <div className="">
             <p className="text-blue-900 justify-center font-bold text-xl 
          text-center mt-16
          ">
            Please select from the services to see the description
           
          </p>
         

          </div>
         
          
        )}
      </div>
      </div>
    </div>

  );
};

export default Service