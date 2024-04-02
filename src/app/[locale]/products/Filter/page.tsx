"use client"

import React, { useState, useEffect } from 'react';
import { products } from '@/app/[locale]/data/data';
import { products_en } from '../../data/data_en';
import { useLocale } from 'next-intl';

export default function FilterPrice({selectedPrices ,setchange}: any) {
const locale=useLocale()
  const [selectedPrice, setSelectedPrice] = useState('0'); // قيمة افتراضية فارغة
  const [DataPrice, setDataPrice] = useState([
    {
      title:"50",
    },  {
      title:"100",
    },  {
      title:"200",
    },  {
      title:"300",
    },
  ]);

  useEffect(() => {
    const data=locale==="ar"? products:products_en.filter(i=>i.type==selectedPrices)
    const filteredProducts = data.filter((product) => {
     
      return product.price >=parseInt(selectedPrice)
    });

    setchange(filteredProducts)
    
  }, [selectedPrices]); 

  const handlePriceChange = (event: any) => {
    const data=locale==="ar"? products:products_en.filter(i=>i.type==selectedPrices)
    const price = parseInt(event.target.value);
    const filteredProducts = data&&data.filter((product:any) => {
    
      return product.price >= price;
    });

    setchange(filteredProducts);
    setSelectedPrice(event.target.value);
  };

  return (
    <div>
      <div className="dark:bg-black dark:text-white dark:border-solid border dark:border-white overflow-hidden w-[110px] sm:w-[140px] relative  bg-[whitesmoke] p-2 font-medium">
      {locale==="ar"?<h1 className='mb-4 font-bold'>فلتر حسب السعر </h1>
:<h1 className='mb-4 font-bold'>fillter price</h1>
}         <div className="m-1">
          <input className={`${locale==="ar"?'ml-2':'mr-2 '} cursor-pointer`}
            type="radio"
            value="0"
            checked={selectedPrice === '0'}
            onChange={handlePriceChange}
          />
{  locale==="ar"?        <label>عرض الكل</label>
:<label>show all </label>
}          </div>
        {
          DataPrice&&DataPrice.map((i,o)=>(
        <div className="m-1" key={o}>
          <input className={`${locale==="ar"?'ml-2':'mr-2 '} cursor-pointer`}
            type="radio"
            value={i.title}
            checked={selectedPrice === i.title}
            onChange={handlePriceChange}
          />
{  locale==="ar"?        <label>يبدأ من {i.title}</label>
:<label>start with {i.title}</label>
}          </div>

          ))
        }
        
      </div>
    </div>
  );
}

