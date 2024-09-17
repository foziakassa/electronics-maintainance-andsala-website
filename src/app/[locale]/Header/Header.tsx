
"use client";


import { useRouter, usePathname } from '@/navigation' 


import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { faBox } from "@fortawesome/free-solid-svg-icons/faBox";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons/faQuestionCircle";
import Lang from "../../Lang/page";
import { useLocale, useTranslations } from 'next-intl';
import { Button, MantineProvider } from '@mantine/core';
// import locale from 'antd/es/date-picker/locale/en_US';

export default function Header() {

  const t = useTranslations('Header');
  const locale = useLocale()

  const [isResponsive, setIsResponsive] = useState(false);
 
  const onMenuClick = () => {
    setIsResponsive(!isResponsive);
  };


 
  

 

  

  return (
    <div className="mb-24">
      <div className={classes.Header}>
        
        <div className={classes.name}>
          <h1 className="text-2xl font-bold ">
            XX Electronics Maintainance & Sales
          </h1>
        </div>
        <div className={classes.Button}>
          <Link href="/" className="font-sans text-xl">{t('home')}</Link>
          {/* <Link href=`about`>{t("about")}</Link> */}
          <Link href={`/${locale}/About`}>{t("about")}</Link>
          <Link href={`/${locale}/Product`}> {t("product")}</Link>
          <Link href={`/${locale}/ServiceMain`}>{t("service")}</Link>
          <Link href={`/${locale}/Contact`}>{t("contact")}</Link>
          <Link href={`/${locale}/FAQ`}> {t("faq")}</Link>
          
              </div>

           
            <Lang/>
            
            
              <div className="">
                <Link href={`/Dashbord`}>
               
             <button className='bg-teal-600 w-40 h-12 text-white rounded-lg' 
            
             >
             
              <h1 className=''>
              Dashbord <span className="ml-2">&#8594;</span>
             </h1>
             </button>
             </Link>
              </div>
              

           
            
            

            
    

        {!isResponsive && (
          <a id="menu-icon" className={classes.menuicon} onClick={onMenuClick}>
            <FontAwesomeIcon icon={faBars} className="font-bold  absolute right-4 top-5 " />
          </a>
        )}

        {isResponsive && (
          <nav
          id="navigation-bar"
          className="absolute top-0 right-0 w-full bg-white py-3"
        >
          <div className="">
            <a>
              <FontAwesomeIcon
                icon={faTimes}
                className="font-bold text-2xl text-gray-500   absolute right-3 top-5"
                onClick={() => setIsResponsive(!isResponsive)}
              />
        
              <div
                className="flex flex-col gap-1 text-lg pb-3 my-10"
                onClick={() => setIsResponsive(!isResponsive)}
              >
                <Link href="/" className="flex items-center hover:bg-slate-100 py-3 px-4">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="text-teal-600 mx-4"
                  />
                { t('home')}
                </Link>
                <Link href={`/${locale}/About`} className="flex items-center hover:bg-slate-100 py-3 px-4">
                  <FontAwesomeIcon
                    icon={faInfo}
                    className="text-teal-600 mx-4"
                  />
                    { t('about')}
                </Link>
                <Link href={`/${locale}/Product`} className="flex items-center hover:bg-slate-100 py-3 px-4">
                  <FontAwesomeIcon
                    icon={faBox}
                    className="text-teal-600 mx-4"
                  />
                   { t('product')}
                </Link>
                <Link href={`/${locale}/ServiceMain`} className="flex items-center hover:bg-slate-100 py-3 px-4">
                  <FontAwesomeIcon
                    icon={faCog}
                    className="text-teal-600 mx-4"
                  />
                   { t('service')}
                </Link>
                <Link href={`/${locale}/Contact`} className="flex items-center hover:bg-slate-100 py-3 px-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-teal-600 mx-4"
                  />
                 { t('contact')}
                </Link>
                <Link href={`/${locale}/FAQ`} className="flex items-center hover:bg-slate-100 py-3 px-4">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="text-teal-600 mx-4"
                  />
                  {t('faq')}
                </Link>
              </div>
            </a>
          </div>
        </nav>
        )}
      </div>
    </div>
  );
}
