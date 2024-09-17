"use client";
import useSwr from "swr";
import fetch from "@/shared/utils/fetch";

import Card1 from "./Card1";
import Link from "next/link";
import { CollectionQuery } from "@/Model/collection-query.model";
import fetcher from "@/shared/utils/fetcher";
import { useLocale, useTranslations } from "next-intl";

export default function ServiceSample() {
  const locale =useLocale()

  const t  = useTranslations("ServiceMain");
  

  const collection: CollectionQuery = {
    locale: locale,
    orderBy: [
      {
        field: "updatedAt",
        direction: "desc",
      },
    ]
  };

  const { data, isLoading, error } = useSwr(
    { url: "/portal-product-and-services/get-services?top=3", params: collection },
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (data) {
    return (
      <div className="overflow-x-hidden">
        <div className="mt-70">
          <div className="flex justify-center items-center">
            {/* <img src={logo.src} alt="" className="rounded-full h-36 w-36" /> */}
            <h1
        className="text-teal-700 text-center text-4xl 
        font-bold 
        p-2 bg-opacity-40 rounded-sm "
        style={{ fontFamily: 'Open Sans' }}
      >
       {t("ourServices")}
      </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-24 mt-5">
            {data.data.map((item: any, index: number) => (
              <div
                className="flex-0 w-full md:w-1/3 xl:w-1/4"
                key={item.id}
              >
                <Card1 key={index} serviceData={item} />
              </div>
            ))}
          </div>
        </div>
        <Link
          href={`/${locale}/Service`}
          className="text-blue-500 hover:text-blue-600 font-medium text-center text-2xl"
        >
          <h1 className="my-5">
            Explore our services <span className="ml-2">&#8594;</span>
          </h1>
        </Link>
      </div>
    );
  }
}