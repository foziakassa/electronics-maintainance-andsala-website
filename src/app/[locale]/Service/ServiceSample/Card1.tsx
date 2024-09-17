'use client'
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
interface serviceProps {
  serviceData: {
    name:string
    description:String;
    coverPage: string;
  };
}
export default function Card1(props:serviceProps) {
  const router= useRouter()
  const {serviceData} =props;
  const t = useTranslations('product');
  

  return (
    <div className="relative flex w-85 h-[350px]
    flex-col rounded-xl bg-white bg-clip-border
     text-gray-700  my-10 shadow-2xl  
       hover:translate-x-1 mx-4

     ">
      <div
        className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl text-white shadow-lg bg-cover bg-center"
        
      >
       
        <img className="  object-fill h-48 w-96 " src={serviceData?.coverPage}  alt="Bonnie Green image"/>

      </div>
      <div className="p-6 ">
        <h5 className="mb-2 block font-sans 
        xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs 
        font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {serviceData?.name}
        </h5>
        <p className="block font-sans 
        xl:text-lg lg:text-base md:text-sm sm:text-xs
         
        font-light leading-relaxed 
        text-inherit antialiased
        ">
          {serviceData?.description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
        onClick={()=>
          router.push('/ServiceDetail')}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-teal-500 py-3 px-6
           text-center align-middle font-sans text-xs font-bold 
           uppercase text-white shadow-md shadow-blue-500/20 
           transition-all
           hover:shadow-lg hover:shadow-blue-500/40 
           focus:opacity-[0.85] focus:shadow-none 
           active:opacity-[0.85] active:shadow-none 
           disabled:pointer-events-none disabled:opacity-50 
           disabled:shadow-none
           
           "
        >
         {t('readmore')}
        </button>
      </div>
    </div>
  );
}