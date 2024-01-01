"use client"

import React, { useState, useEffect } from 'react';
import {Productshome } from '@/app/data/data';
import FilterPrice from '../filterproducthome/Filterprice';

export default function FilterProducthome({setchange}:any) {
  const [selectedPrice, setSelectedPrice] = useState("لمدخل البيت"); // قيمة افتراضية فارغة

  useEffect(() => {
    
    const filteredProducts = Productshome.filter((product) => {
      return product.type.includes(selectedPrice)
    });

    setchange(filteredProducts);
    selectedPrice
  }, []);

  const handlePriceChange = (event: any) => {
    console.log(selectedPrice);
    
    const price = (event.target.value);    
    const filteredProducts = Productshome.filter((product) => {
    
      return product.type.includes(price);
    });

    setchange(filteredProducts);
    setSelectedPrice(event.target.value);
  };

  return (
    <div>
      <div className="w-[115px] sm:w-[140px] relative right-[2px] sm:right-[20px] border border-solid border-black p-2 font-medium">
        <h1 className='mb-4 font-bold'>فلتر حسب النوع </h1>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="لمدخل البيت"
            checked={selectedPrice==='لمدخل البيت'}
            onChange={handlePriceChange}
          />
          <label>لمدخل البيت</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="غرفة المعيشة"
            checked={selectedPrice === 'غرفة المعيشة'}
            onChange={handlePriceChange}
          />
          <label>غرفة المعيشة</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="غرفة النوم"
            checked={selectedPrice === 'غرفة النوم'}
            onChange={handlePriceChange}
          />
          <label>غرفة النوم</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="للحمام"
            checked={selectedPrice === 'للحمام'}
            onChange={handlePriceChange}
          />
          <label>ادوات الحمام</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="للمطبخ"
            checked={selectedPrice === 'للمطبخ'}
            onChange={handlePriceChange}
          />
          <label>ادوات المطبخ</label>
        </div>
      </div>
      <FilterPrice selectedPrices={selectedPrice} setchange={setchange}/>
    </div>
  );
}

