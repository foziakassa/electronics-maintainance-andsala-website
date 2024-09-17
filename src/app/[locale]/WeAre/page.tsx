// import router from "next/navigation";\
'use client'
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function WeAre() {
  
  const t = useTranslations("WeAre")
  const router=useRouter()
  return (
    <div
      className="
      mt-3
      px-6 py-2"
    >
      <h1
        className="text-teal-700 text-center text-5xl 
         font-bold 
        p-2 bg-opacity-40 rounded-sm"
        style={{ fontFamily: 'Open Sans' }}
      >
      { t("weare")}
      </h1>

      <h1
        className="text-teal-600 text-center xl:text-4xl 
        lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl font-bold 
        p-2 bg-opacity-40 rounded-sm"
        style={{ fontFamily: 'Open Sans' }}
      >
       {t('XXElectronicsMaintainanceAndSales')}
      </h1>

      <h1
        className="mb-6 xl:mx-32 md:mx-15 my-7 
         text-gray-700 text-center xl:text-2xl md:text-1xl 
         sm:text-lg xs:text-lg   bg-opacity-40 rounded-sm 
         sm:mx-2 xs:mx-2"
        style={{
          // animation: "float 2s infinite",
          // letter-spacing:2px;
          fontFamily: 'Open Sans',
          lineHeight: 1.5,
        }}
      >
        {t('Atour')}
      </h1>
      <div
                className="max-w-md mx-auto mt-3 sm:flex sm:justify-center 
            md:mt-6">
      {/* <div
        className=" item-center justify-center max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6"
      >
        <button
          onClick={() => router.push("/About")}
          type="button"
          className=" flex items-center justify-center 
           text-base font-bold text-white w-full
           bg-teal-400 border border-transparent rounded-full 
           text-md hover:bg-teal-300 md:py-5 md:text-2xl
           md:px-10 "
        >
          more about us
        </button>
      </div> */}
      </div>
    </div>
  );
}