import React, { useState, useEffect } from 'react';
import { Productshome } from '@/app/data/data';

export default function FilterPrice({selectedPrices ,setchange}: any) {
  const [selectedPrice, setSelectedPrice] = useState('0'); // قيمة افتراضية فارغة

  useEffect(() => {
    const data=Productshome.filter(i=>i.type==selectedPrices)
    const filteredProducts = data.filter((product) => {
     
      return product.price >= parseInt(selectedPrice)
    });

    setchange(filteredProducts)
    
  }, [selectedPrices]); 

  const handlePriceChange = (event: any) => {
    const data=Productshome.filter(i=>i.type==selectedPrices)
    const price = parseInt(event.target.value);
    const filteredProducts = data&&data.filter((product:any) => {
    
      return product.price >= price;
    });

    setchange(filteredProducts);
    setSelectedPrice(event.target.value);
  };

  return (
    <div>
      <div className="w-[115px] sm:w-[140px] relative right-[2px] sm:right-[20px] border border-solid border-black p-2 font-medium">
        <h1 className='mb-4 font-bold'>فلتر حسب السعر</h1>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="0"
            checked={selectedPrice === '0'}
            onChange={handlePriceChange}
          />
          <label>عرض الكل</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="25"
            checked={selectedPrice === '25'}
            onChange={handlePriceChange}
          />
          <label>يبدأ من 25</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="50"
            checked={selectedPrice === '50'}
            onChange={handlePriceChange}
          />
          <label>يبدأ من 50</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="100"
            checked={selectedPrice === '100'}
            onChange={handlePriceChange}
          />
          <label>يبدأ من 100</label>
        </div>
        <div className="m-1">
          <input className='ml-2 cursor-pointer'
            type="radio"
            value="200"
            checked={selectedPrice === '200'}
            onChange={handlePriceChange}
          />
          <label>يبدأ من 200</label>
        </div>
      </div>
    </div>
  );
}

