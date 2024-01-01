import React, { useState, useEffect } from 'react';
import { products } from '@/app/data/data';

export default function FilterPrice({selectedPrices ,setchange}: any) {
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
    const data=products.filter(i=>i.title==selectedPrices)
    const filteredProducts = data.filter((product) => {
     
      return product.price >=parseInt(selectedPrice)
    });

    setchange(filteredProducts)
    
  }, [selectedPrices]); 

  const handlePriceChange = (event: any) => {
    const data=products.filter(i=>i.title==selectedPrices)
    const price = parseInt(event.target.value);
    const filteredProducts = data&&data.filter((product:any) => {
    
      return product.price >= price;
    });

    setchange(filteredProducts);
    setSelectedPrice(event.target.value);
  };

  return (
    <div>
      <div className="w-[110px] sm:w-[140px] relative right-[2px] sm:right-[20px] border border-solid border-black p-2 font-medium">
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
        {
          DataPrice&&DataPrice.map((i,o)=>(
        <div className="m-1" key={o}>
          <input className='ml-2 cursor-pointer'
            type="radio"
            value={i.title}
            checked={selectedPrice === i.title}
            onChange={handlePriceChange}
          />
          <label>يبدأ من {i.title}</label>
        </div>

          ))
        }
        
      </div>
    </div>
  );
}

