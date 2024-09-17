'use client'
import { useRouter } from "next/navigation";
import classes from "./Home.module.css";
import useSwr from "swr";
import fetch from "@/shared/utils/fetch";

import { useTranslations } from "next-intl";
import {useLocale} from 'next-intl'
import { CollectionQuery } from "@/Model/collection-query.model";
import fetcher from "@/shared/utils/fetcher";
// import locale from "antd/es/locale";




export default function Homee() {
  const t = useTranslations('home')
  const locale =useLocale()
  const collection: CollectionQuery = {
    locale: locale,
    orderBy: [
      {
        field: "updatedAt",
        direction: "desc",
      },
    ],
  };
  
  const router = useRouter();
  const { data, isLoading, error } = useSwr(
    { url:"/portal-interactions/get-front-images" ,  params: collection },
    fetcher
  );
 
  

  if (isLoading) return <div
  className="mt-96"
  >Loading...</div>;
  if (error) return <div 
  className="mt-96"
  >
    Error</div>;



  if (data) {
    const homeData = data.data[0]; 

    return (
      <div className={classes.home}>
        <section className="w-full">
          <div className="w-full h-[700px] relative -mt-6  ">
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${homeData.cover})`
                
                
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-t from-black via-black/80"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-white text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
                {homeData.title}
              </h1>
              <h1
                style={{
                  // textShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                  animation: "float 2s infinite",
                }}
                className="mb-12 xl:mx-20 md:mx-15 my-7 animate__animated text-white text-center xl:text-3xl md:text-3xl sm:text-2xl xs:text-xl font-semibold p-2   bg-opacity-40 rounded-sm sm:mx-2 xs:mx-2"
              >
                {homeData.description}
              </h1>

              <div
                className="max-w-md mx-auto mt-3 sm:flex sm:justify-center 
            md:mt-6"
              >
                <div className="rounded-full shadow">
                  <button
                    onClick={() => router.push("/All")}
                    type="button"
                    className=" my-7 flex items-center justify-center w-full 
                  px-8 py-3 text-base font-normal text-white bg-teal-400 
                  border border-transparent rounded-full text-md
                   hover:bg-teal-300 md:py-4 md:text-2xl md:px-10"
                  >
                    {t("start")}
                    
                  </button>
                </div>
              </div>
              <form>
                <div
                  className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] 
              xs:w-[90%]  flex gap-2 md:mt-6 xs:mt-4 mx-4"
                ></div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
}
