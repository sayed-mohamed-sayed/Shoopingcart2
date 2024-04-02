"use client"

import React, { useState, useEffect } from 'react';
import { Productshome } from '@/app/[locale]/data/data';
import FilterPrice from '../filterproducthome/Filterprice';
import { useLocale } from 'next-intl';
import { Productshome_en } from '@/app/[locale]/data/data_en';

export default function FilterProducthome({ setchange }: any) {
  const locale = useLocale()
  const [selectedPrice, setSelectedPrice] = useState(`${locale==="ar"?"لمدخل البيت":"Entrance"}`); // قيمة افتراضية فارغة
  const [data, setdata] = useState([
    {
      title: locale === "ar" ? "لمدخل البيت" : "Entrance",
    }, {
      title: locale === "ar" ? "غرفة المعيشة" : "Living Room",
    }, {
      title: locale === "ar" ? "غرفة النوم" : "Bedroom"
    }, {
      title: locale === "ar" ? "للحمام" : "Bathroom"
    }, {
      title: locale === "ar" ? "للمطبخ" : "Kitchen"
    }
  ])


  useEffect(() => {

    const filteredProducts =locale==="ar"?Productshome:Productshome_en.filter((product) => {
      return product.type.includes(selectedPrice)
    });

    setchange(filteredProducts);
    selectedPrice
  }, []);

  const handlePriceChange = (event: any) => {

    const price = (event.target.value);
    const filteredProducts = Productshome.filter((product) => {

      return product.type.includes(price);
    });

    setchange(filteredProducts);
    setSelectedPrice(event.target.value);
  };

  return (
    <div>
      <div className="dark:bg-black dark:text-white dark:border-solid border dark:border-white w-[110px] sm:w-[140px] relative  bg-[whitesmoke] p-2 font-medium">
      {locale==="ar"?<h1 className='mb-4 font-bold'>فلتر حسب النوع </h1>
:<h1 className='mb-4 font-bold'>fillter categroy</h1>
}         {
          data.map((i, o) => (
            <div className="m-1" key={o}>
              <input className={`${locale === "ar" ? 'ml-2' : 'mr-2 '} cursor-pointer`}
                type="radio"
                value={i.title}
                checked={selectedPrice === i.title}
                onChange={handlePriceChange}
              />
              <label>{i.title}</label>
            </div>

          ))
        }

      </div>
      <FilterPrice selectedPrices={selectedPrice} setchange={setchange} />
    </div>
  );
}

