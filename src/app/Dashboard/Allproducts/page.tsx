"use client"
import Image from "next/image";
import { products } from "../../data/data";
import { useState,useEffect } from "react";
import stars from "../../../../public/stars.webp"
// import Filterproduct from "../Filter/filterproduct/page"
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Page() {
  const [starImages, setStarImages] = useState([]);

    
const toastify=()=>{
    toast.error("تم حذف المنتج" ,{position:toast.POSITION.TOP_RIGHT})
}
  useEffect(() => {
    const starImagesArray = [];

    for (let i = 0; i < 5; i++) {
      starImagesArray.push(stars);
    }

    setStarImages(starImagesArray as never[])
  }, []);


    return (
            <div className="flex justify-start  mt-10 relative">
               <div className="w-[200px] relative mt-2 flex">
               </div>
        <div className="flex justify-start flex-wrap w-[80%]">

            {
                products?products.map((i:any)=>(
                    <div className="m-2 border relative border-black border-solid cursor-pointer" key={i.id}>
                
                
                <Image className="w-[250px] h-[300px]" width={300} height={300} src={i.img} alt="Image" />
                <h1 className="pr-2">{i.title}</h1>
                <div className="flex justify-center p-1">
                {
                starImages&&starImages.map((i,o)=>(
                <div className="cursor-pointer" key={o}>
                
                <Image width={20} height={20} src={i} alt="Image"/>
                </div>
                ))
                }
                </div>
                <div className="flex text-center justify-center relative">
                <h1 className=" m-2">{i.price} جنية</h1>
                </div>
                <div className="flex justify-center">
                  
                <button className="bg-[#223f63] m-2 pl-2 pr-2 p-[1px] rounded-sm text-white">
                  <Link href={`/Dashboard/${i.id}`}>
                  تعديل المنتج
                  </Link>
                  </button>
                <button className="bg-[crimson] text-white m-2 pl-2 pr-2 p-[1px] rounded-sm" onClick={()=>toastify()}>حذف المنتج</button>
                </div>
                </div>
                )):<div className="w-screen mt-24 text-center">جار التحميل....</div>
            }
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Page;