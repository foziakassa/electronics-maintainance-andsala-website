"use client";
import useSwr from "swr";
import SocialMedia from "./SocialMedia/page";
import Link from "next/link";
import { CollectionQuery } from "@/Model/collection-query.model";
import { useLocale, useTranslations } from "next-intl";
import fetcher from "@/shared/utils/fetcher";

export default function Footer() {
 const locale = useLocale()
 const t = useTranslations("Footer")
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
    { url:"/portal-interactions/get-social-medias" ,  params: collection },
    fetcher
  );
  return (
    <footer className="px-4 divide-y bg-gray-900 text-gray-200">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-3xl font-bold ml-1">
              XX Electronics 
            </span>
          </a>
          
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-xl font-semibold text-teal-600">Product</h3>
            <ul className="space-y-1 ml-3">
              <li>
                <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("Features")}
               </span>
                </Link>
               
                
              </li>
              <li>
              <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("Integrations")}
               </span>
                </Link>
              </li>
              <li>
              <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("Pricing")}
               </span>
                </Link>
              </li>
              <li>
              <Link href={`/${locale}/FAQ`}>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("FAQ")}
               </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-xl font-semibold text-teal-600">Company</h3>
            <ul className="space-y-1 ml-3">
              <li>
              <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("Privacy")}
               </span>
                </Link>
              </li>
              <li>
              <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("Termsofservice")}
               </span>
                </Link>
              </li>
              <li>
              <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
              {t("feedback")}
               </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-xl font-semibold text-teal-600">Developers</h3>
            <ul className="space-y-1 ml-3">
              <li>
              <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("PublicApI")}
               </span>
                </Link>
              </li>
              <li>
              <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("Documentation")}
               </span>
                </Link>
              </li>
              <li>
              <Link href='#'>
               <span className="font-light text-lg hover:text-xl hover:font-bold">
               {t("Guid")}
               </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-xl font-semibold text-teal-600">Social media</div>

            {data ? (
              <div className="flex justify-center space-x-3 -ml-20">
                {data.data.map((item:any, index: number) => (
                  <div className="">
                    <SocialMedia 
                    SocialMediaData={item} 
                    key={index} />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-300">
        {t("Allrightsreserved")}
      </div>
    </footer>
  );
}
