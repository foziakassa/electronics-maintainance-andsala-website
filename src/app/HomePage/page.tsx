'use client'
import React from 'react';
import useSwr from "swr";
import fetcher from '@/shared/utils/fetcher';
//  import { CollectionQuery } from '@/shared/utils/collection-query-builder';
import { CollectionQuery } from '@/Model/collection-query.model';
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation, Pagination, Autoplay } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';
import 'swiper/css/pagination';
 import 'swiper/css/autoplay';
 import { useLocale, useTranslations } from 'next-intl';

 interface HomeProps {}

 const HomePage: React.FC<HomeProps> = () => {
   const t = useTranslations('HomePage');
   const locale=useLocale();

   const [perPage,setPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(1);
   const [totalPage,setTotalPage] = React.useState(1);

  const collection: CollectionQuery = {
    top: perPage,
    locale: locale,
     skip: (currentPage-1) * perPage,
    orderBy: [
      {
        field: 'updatedAt',
        direction: 'desc'
      }
    ]
   }

  const { data, isLoading, error } = useSwr(
    {url:"/portal-interactions/get-front-images", params: collection},
    fetcher
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (data) {
    const { data: apiData } = data;

    const handleGetStartedClick = () => {
      const newWindow = window.open('about:blank', '_blank');
      if (newWindow) {
        newWindow.document.write(`

        `);
      } else {
        console.error("Failed to open new window");
      }
    };

    return (
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} 
          spaceBetween={50}
          slidesPerView={1}
          speed={3000}
          autoplay={{
            delay: 3000, 
       disableOnInteraction: true, 
          }}
          loop={true}
          navigation
          pagination={{ clickable: true}}
        >
          {apiData.map((slide: { cover: any; title: String|any; description: String|any }, index: React.Key | null | undefined) => (
            <SwiperSlide key={index}>
              <div
                className=" top-0 left-0 w-full relative bg-cover bg-center h-[700px] overflowX-hidden"
                style={{
                  backgroundImage: `url('${slide.cover}')`,
                  width: '100vw',
                  overflowY: 'hidden'
                }}
              >
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
                <div className="relative h-full">
                  <section className="max-w-5xl pt-52 pb-24 mx-auto text-white body-font">
                    <div className="flex flex-col items-center justify-center h-full px-4">
                      <h1
                        className="text-3xl md:text-5xl text-white font-bold text-center mb-6 animate__animated"
                        style={{
                          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                          animation: 'float 2s infinite',
                        }}
                      >
                        {slide.title}
                      </h1>
                      <h2
                        className="text-xl md:text-2xl text-white font-bold text-center mb-12 animate__animated"
                        style={{
                          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                          animation: 'bounce 2s infinite',
                        }}
                      >
                        {slide.description}
                      </h2>
                      <div className="flex justify-center w-full">
                        <button
                          className="bg-gradient-to-r from-blue-800 to-blue-800 hover:from-blue-300 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-lg shadow-md animate__animated"
                          style={{
                            animation: 'pulse 2s infinite',
                            fontSize: 18,
                          }}
                          onClick={handleGetStartedClick}
                        >{t('Get Started')}
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
};

export default HomePage;