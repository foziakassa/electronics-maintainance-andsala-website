import React, { useContext, useState } from 'react';
import am from '../../Asset/flag/am.png';
import oro from '../../Asset/flag/oro.jpeg';
import us from '../../Asset/flag/us.jpeg';
import tg from '../../Asset/flag/tg.png';
import sm from '../../Asset/flag/OIP.jpeg';
import { usePathname, useRouter } from '@/navigation';

type Lang = {
  name: string;
  flag: string
};

export default function Lang() {
  const [isFlagDropdownOpen, setIsFlagDropdownOpen] = useState(false);
  const [defaultFlagSrc, setDefaultFlagSrc] = useState(us.src); // initialize default flag to US
  const router = useRouter();
  const pathname = usePathname();

  const onFlagDropdownClick = () => {
    setIsFlagDropdownOpen(!isFlagDropdownOpen);
  };

  const handleFlagChange = (newLang: Lang) => {
    router.push(pathname, { locale: newLang.name.toLowerCase() });
    setDefaultFlagSrc(newLang.flag); // update default flag to the newly selected language
  };

  return (
    <div>
      <div className="relative inline-block mr-28">
        <button
          className="dropbtn "
          onClick={onFlagDropdownClick}
        >
          <img src={defaultFlagSrc} alt={Lang.name} className="w-7 h-7 mr-2 hover:tr " />
       
        {isFlagDropdownOpen && (
          <div className="dropdown-content  absolute bg-white shadow-md py-2 w-48">
            <ul>
            <li>
                <a href="#" className="flex items-center py-2 pl-4" onClick={() => handleFlagChange({ name: 'en', flag: us.src} )}>
                  <img src={us.src} alt="US flag" className="w-7 h-7 mr-2" />
                  English
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center py-2 pl-4 " onClick={() => handleFlagChange({ name: 'am', flag:am.src })}>
                  <img src={am.src} alt="Amhara flag" className="w-7 h-7 mr-2" />
                  Amharic
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center py-2 pl-4" onClick={() => handleFlagChange({ name: 'om', flag:oro.src })}>
                  <img src={oro.src} alt="Oromia flag" className="w-7 h-7 mr-2" />
                  Oromiffa
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center py-2 pl-4" onClick={() => handleFlagChange({ name: 'ti', flag: tg.src })}>
                  <img src={tg.src} alt="Tigray flag" className="w-7 h-7 mr-2" />
                  Tigre
                </a>
              </li>
             
              <li>
                <a href="#" className="flex items-center py-2 pl-4" onClick={() => handleFlagChange({ name: 'so', flag: sm.src })}>
                  <img src={sm.src} alt="Somali flag" className="w-7 h-7 mr-2" />
                  Somali
                </a>
              </li>
            </ul>
          </div>
        )}
         </button>
      </div>
    </div>
  );
};