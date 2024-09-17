"use client";
import classes from "../Product.module.css";
import ProductList from "../ProductList/page";
import useSwr from "swr";
import fetch from "@/shared/utils/fetch";

import Link from "next/link";
import { CollectionQuery } from "@/Model/collection-query.model";
import fetcher from "@/shared/utils/fetcher";
import { useLocale, useTranslations } from "next-intl";
export default function ProductSample() {
  const t = useTranslations('product');
  const locale = useLocale()
  const collection: CollectionQuery = {
    locale: locale,
    orderBy: [
      {
        field: "updatedAt",
        direction: "desc",
      },
    ]
  };
  const { data, isLoading, error } =  useSwr(
    { url: "/portal-product-and-services/get-products?top=3", params: collection },
    fetcher
  );
  if (isLoading) return <div className="">Loading...</div>;
  if (error) return <div className="">error</div>;
  console.log(error);
  if (data) {
    return (
      <div className='mt-5'>
        <div className={classes.Service}>
        <h1
        className="text-teal-700 text-center text-4xl 
        font-bold 
        p-2 bg-opacity-40 rounded-sm "
        style={{ fontFamily: 'Open Sans' }}
      >
       { t("ourProduct")}
      </h1>
        </div>
        <div className={classes.CardList}>
          {data.data.slice(0, 3).map((item: any, index: number) => (
            <div className={classes.Card} key={item.id}>
              <ProductList key={index} productData={item} />
            </div>
          ))}
        </div>
        <Link
          href={`/${locale}/ProductPagination`}
          className="text-blue-500 hover:text-blue-600 font-medium text-center
                   text-2xl "
        >
          <h1 className="my-5">
           
            expolor our product <span className="ml-2 ">&#8594;</span>
          </h1>
        </Link>
      </div>
    );
  }
}
