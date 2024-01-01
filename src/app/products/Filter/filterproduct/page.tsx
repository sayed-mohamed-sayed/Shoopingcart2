import React, { useState, useEffect } from 'react';
import { products } from '@/app/data/data';
import FilterPrice from '../page';

export default function FilterProduct({ setchange }: any) {
  const [selectedCategroy, setSelectedCategroy] = useState('الموبيلات'); // قيمة افتراضية فارغة
  const [data, setdata] = useState([
    {
      title:"الموبيلات",
    },{
      title:"اللابتوب",
    },{
      title:"ساعات",
    },{
      title:"سماعات",
    },{
      title:"شواحن",
    },

  ]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return product.title.includes(selectedCategroy)
    });

    setchange(filteredProducts);
  }, []);

  const handlePriceChange = (event: any) => {
    
    const price = (event.target.value);    
    const filteredProducts = products.filter((product) => {
    
      return product.title.includes(price);
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
        {/* <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="الموبيلات"
            checked={selectedCategroy === 'الموبيلات'}
            onChange={handlePriceChange}
          />
          <label>الموبيلات</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="اللابتوب"
            checked={selectedCategroy === 'اللابتوب'}
            onChange={handlePriceChange}
          />
          <label>اللابتوب</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="ساعات"
            checked={selectedCategroy === 'ساعات'}
            onChange={handlePriceChange}
          />
          <label>ساعات يد</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="سماعات"
            checked={selectedCategroy === 'سماعات'}
            onChange={handlePriceChange}
          />
          <label>سماعات</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="شواحن"
            checked={selectedCategroy === 'شواحن'}
            onChange={handlePriceChange}
          />
          <label>شواحن</label>
        </div> */}
      </div>
      <FilterPrice selectedPrices={selectedCategroy}  setchange={setchange}/>
    </div>
  );
}

