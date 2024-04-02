"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import stars from "../../../../../public/stars.webp"
import {Link} from "@/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import FilterProduct from "../Shoes/Filter/page";
import { useLocale } from "next-intl";
function Page() {
    const [change ,setchange]=useState("")
    const [starImages, setStarImages] = useState([]);

    const locale=useLocale()
const toastify=()=>{
  toast.success(locale==="ar"?"تم اضافة المنتج الي سلة المشتريات ":"The product has been added to the buyer" ,{position:toast.POSITION.TOP_RIGHT})
}
  useEffect(() => {
    const starImagesArray = [];

    for (let i = 0; i < 5; i++) {
      starImagesArray.push(stars);
    }

    setStarImages(starImagesArray as never[])
  }, []);


    return (
            <div className="dark:bg-black flex justify-start  mt-10 dark:mt-0 relative">
               <div className="w-[200px] relative mt-2 flex">
<FilterProduct setchange={setchange}/>
               </div>
        <div className="flex justify-start flex-wrap w-[80%]">

            {
                Array.isArray(change)?change.map((i:any)=>(
                    <div className=" dark:border-white bg-[#e6e6e6] p-[1px] m-2 border relative border-black border-solid cursor-pointer" key={i.id}>
<Link href={{
  pathname: '/products/[id]',
  params: {id:i.id}
}}>                
                
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
                {locale==="ar"?<h1 className=" m-2">{i.price} جنية</h1>
:<h1 className=" m-2">{i.price}pound</h1>
}                 </div>
                </Link>
                <div className="flex justify-center">
                <button className="bg-[#223f63] dark:bg-black m-2 pl-2 pr-2 p-[1px] rounded-sm text-white">{locale==="ar"?"شراء الان":"buy now"}</button>
                <button className="bg-[#dcdada] m-2 pl-2 pr-2 p-[1px] rounded-sm" onClick={()=>toastify()}>{locale==="ar"?"اضف للسلة":"add to cart"}</button>
                </div>
                </div>
                )):<div className="w-screen mt-24 text-center">{locale==="ar"?"جار التحميل....":"loading ...."}</div>
            }
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Page;