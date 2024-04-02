"use client"

import React, { useState, useEffect } from 'react';
import { products } from '@/app/[locale]/data/data';
import FilterPrice from '../page';
import { useLocale } from 'next-intl';
import { products_en } from '@/app/[locale]/data/data_en';

export default function FilterProduct({ setchange }: any) {
 const locale=useLocale()
  const [selectedCategroy, setSelectedCategroy] = useState(`${locale==="ar"?"الموبيلات":"mobil"}`)
  const [data, setdata] = useState([
    {
      title:locale==="ar"?"الموبيلات":"mobil",
    },{
      title:locale==="ar"?"اللابتوب":"laptop",
    },{
      title:locale==="ar"?"ساعات":"clock",
    },{
      title:locale==="ar"?"سماعات":"headphones",
    },{
      title:locale==="ar"?"شواحن":"Chargers",
    },

  ]);

  useEffect(() => {
    const filteredProducts = locale==="ar"? products:products_en.filter((product) => {
      return product.type.includes(selectedCategroy)
    });

    setchange(filteredProducts);
  }, []);

  const handlePriceChange = (event: any) => {
    
    const price = (event.target.value);    
    const filteredProducts =locale==="ar"? products:products_en.filter((product) => {
    
      return product.type.includes(price);
    });

    setchange(filteredProducts);
    setSelectedCategroy(event.target.value);
  };

  return (
    <div>
      <div className="dark:bg-black dark:text-white dark:border-solid border dark:border-white w-[110px] sm:w-[140px] relative  bg-[whitesmoke] p-2 font-medium">
      {locale==="ar"?<h1 className='mb-4 font-bold'>فلتر حسب النوع </h1>
:<h1 className='mb-4 font-bold'>fillter categroy</h1>
}           {
          data&&data.map((i,o)=>(

        <div className="m-1" key={o}>
          <input className={`${locale==="ar"?'ml-2':'mr-2 '} cursor-pointer `}
            type="radio"
            value={i.title}
            checked={selectedCategroy === i.title}
            onChange={handlePriceChange}
          />
          <label>{i.title}</label>
        </div>
          ))
        }
      </div>
      <FilterPrice selectedPrices={selectedCategroy}  setchange={setchange}/>
    </div>
  );
}

