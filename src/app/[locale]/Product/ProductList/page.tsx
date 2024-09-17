'use client'

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation'
import { useTransition } from 'react';
interface ProductProps{
  productData:{
    name:string;
    
    coverPage:string;
  }
}
export default function ProductList(props:ProductProps) { 
  const router =useRouter()
  const {productData}=props;
  const t= useTranslations('product')
  return (
      <div className="relative  flex w-100
      flex-col rounded-xl bg-white bg-clip-border
       text-gray-700  
       my-10 shadow-2xl 
       hover:translate-x-1
       ml-10
       mr-10
      
        ;">
        <div
          className="relative mx-1 -mt-6  h-90 overflow-hidden 
          rounded-xl text-white shadow-lg bg-cover bg-center"
         
        >
         
          <img 
          className="full object-fill h-60 w-80" 
          src={productData?.coverPage} 
           alt="Bonnie Green image"/>
  
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {productData?.name}
          </h5>
         
        </div>
        <div className="p-6 pt-0">
          <button 
          onClick={()=>
            router.push('/ProductPage')
          }
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-teal-500 
            py-3 px-6 text-center align-middle font-sans 
            text-xs font-bold uppercase text-white shadow-md
             shadow-blue-500/20 transition-all hover:shadow-lg
              hover:shadow-blue-500/40 focus:opacity-[0.85] 
              focus:shadow-none active:opacity-[0.85] active:shadow-none 
              disabled:pointer-events-none disabled:opacity-50 
              disabled:shadow-none"
          >
            {t('detail')}
          </button>
        </div>
      </div>
    );
  }