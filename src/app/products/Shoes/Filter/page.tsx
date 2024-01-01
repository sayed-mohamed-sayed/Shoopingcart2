"use client"

import React, { useState, useEffect } from 'react';
import { ProductsClothes, ProductsShoes } from '@/app/data/data';
import FilterPrice from '../Filter/ShoesPrice';

export default function FilterProduct({ setchange }: any) {
  const [selectedCategroy, setSelectedCategroy] = useState('رجالي'); // قيمة افتراضية فارغة
  const [data, setdata] = useState([
    {
      title:"رجالي",
    },{
      title:"حريمي",
    },{
      title:"اطفال",
    }

  ]);

  useEffect(() => {
    const filteredProducts = ProductsShoes.filter((product) => {
      return product.type.includes(selectedCategroy)
    });

    setchange(filteredProducts);
  }, []);

  const handlePriceChange = (event: any) => {
    
    const price = (event.target.value);    
    const filteredProducts = ProductsShoes.filter((product) => {
    
      return product.type.includes(price);
    });

    setchange(filteredProducts);
    setSelectedCategroy(event.target.value);
  };

  return (
    <div>
      <div className="w-[110px] sm:w-[140px] relative right-[2px] sm:right-[20px] border border-solid border-black p-2 font-medium">
        <h1 className='mb-4 font-bold'>فلتر حسب النوع </h1>
        {
          data&&data.map((i,o)=>(

        <div className="m-1" key={o}>
          <input className='ml-2 cursor-pointer'
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

