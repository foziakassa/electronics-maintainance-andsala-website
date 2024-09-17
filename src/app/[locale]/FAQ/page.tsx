"use client";
import useSwr from "swr";
import fetch from "@/shared/utils/fetch";
import Faqcard from "./Faqcard";
import faq from '../../Asset/flag/faq.jpg'
import fetcher from "@/shared/utils/fetcher";
import { CollectionQuery } from "@/Model/collection-query.model";
import { useLocale, useTranslations } from "use-intl";
export default function FAQ() {
  const t = useTranslations("Header")
  const locale = useLocale()
  const collection: CollectionQuery = {
    locale: locale,
    orderBy: [
      {
        field: "updatedAt",
        direction: "desc",
      },
    ],
  };
  
  const { data, isLoading, error } = useSwr(
    { url:"/portal-interactions/get-faqs" ,  params: collection },
    fetcher
  );

  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (data) {
    console.log(data);
    return (
      <div className="">
        <div className="  relative w-full bg-white px-6 pt-10 pb-8  mb-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        {/* <div className=" w-full">
          <img src={faq.src}/>

        </div> */}
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h2 className="mt-5 text-center text-xl text-teal-600 font-bold tracking-tight md:text-5xl">
                {t("faq")}
              </h2>
              <p className="mt-3 text-lg text-neutral-500 md:text-xl">
                Frequenty asked questions
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              {data.data.map((item: any, index: number) => (
                <Faqcard key={index} FaqData={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
