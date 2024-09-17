
"use client";


import { useRouter, usePathname } from '@/navigation' 


import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

// import locale from 'antd/es/date-picker/locale/en_US';

export default function Header() {

  

  const [isResponsive, setIsResponsive] = useState(false);
 
  const onMenuClick = () => {
    setIsResponsive(!isResponsive);
  };


 
  

 

  

  return (
    <div className="mb-24">
      <div className={classes.Header}>
        
        {/* <div className={classes.name}>
          <h1 className="text-2xl font-bold ">
            XX Electronics Maintainance & Sales
          </h1>
        </div> */}
        <div className={classes.Button}>
          
          
              </div>

          
            
            
            
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
        
              
            </a>
          </div>
        </nav>
        )}
      </div>
    </div>
  );
}
