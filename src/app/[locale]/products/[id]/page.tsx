"use client"
import { products } from "@/app/[locale]/data/data";
import Image from "next/image";
import cart from "../../../../../public/cart.png"
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ProductOther from "../productsther/page";
import { products_en } from "../../data/data_en";
import { useLocale } from "next-intl";

export default function Page({params}:any) {
const locale=useLocale()
const dataar= products.find(i=>i.id==params.id)
const dataen=products_en.find(i=>i.id==params.id)
const [data,setdata]=useState(locale==='ar'?dataar:dataen)


const toastify=()=>{
    toast.success(locale==="ar"?"تم اضافة المنتج الي سلة المشتريات ":"The product has been added to the buyer" ,{position:toast.POSITION.TOP_RIGHT})
}

const [img, setimg] = useState<string | undefined>(data && data.img);
const [plus ,setplus]=useState(1)

    return (
        <>
        <div className="flex flex-col  sm:flex sm:flex-row  dark:bg-black dark:text-white">
            <div className="flex items-start ">
                <div className="img1">
                <Image width={400} height={400} src={img||''} alt="image"/>
                </div>
                <div className="img mr-2 overflow-hidden" >
                <Image onClick={()=>setimg(data&&data.img )} className="m-[2px] cursor-pointer" width={130} height={130} src={data&&data.img||''} alt="image"/>
                <Image onClick={()=>setimg(data&&data.img)} className="m-[2px] cursor-pointer" width={130} height={130} src={data&&data.img||''} alt="image"/>
                <Image onClick={()=>setimg(cart.src)} className="m-[2px] cursor-pointer" width={130} height={130} src={cart} alt="image"/>
                </div>
            </div>
            <div className={`w-[100%] flex flex-col mt-16 sm:mt-0 ${locale==="en"&&'ml-[5px]'}`}>
<div className="flex justify-start items-start w-[100%] h-6 relative font-bold text-lg mr-4">
<h1>{data&&data.title}</h1>
<h2 className={`absolute  ${locale==="ar"?'right-[200px]':'left-[200px]'}`}>{data&&data.price*plus} {locale==="ar"?'جنية':'pound'}</h2>

</div>
           <div className="flex justify-start items-center mt-4 w-[100%]   font-bold text-lg mr-4">
            <h1 className="ml-[20px]">{locale==="ar"?'الكمية ':'countity'}</h1>
            <div className="flex justify-center ml-4 items-center border border-solid border-neutral-500 w-[120px] relative">
<button disabled={plus==10} onClick={()=>setplus(plus+1)} className="absolute right-1  border-l p-[2px] border-neutral-500">+</button>
<p>{plus}</p>
<button disabled={plus==1} onClick={()=>setplus(plus-1)} className="absolute left-1  border-r p-[2px] border-neutral-500">-</button>
            </div>
           </div>
            <div className="mt-4 flex justify-start items-center font-bold text-xl mr-4 ">
<button className="bg-[#223f63] dark:bg-black tet-white border border-neutral-500 text-white w-[100px] ml-4 rounded-sm">{locale==="ar"?"شراء الان":"buy now"}</button>
           <div className="flex border border-neutral-500 bg-[#dcdada] rounded-sm pr-1 pl-1">
            <button onClick={()=>toastify()} className="dark:text-black">{locale==="ar"?"اضف للسلة":"add to cart"}</button>
            <Image className="mr-2" width={20} height={20} src={cart} alt="image"/>
           </div>
            </div>
            </div>
        </div>
        <div className="font-bold mt-10 dark:mt-0 dark:bg-black dark:text-white">
            <h1 className={`text-xl ${locale==="en"&&'ml-[5px]'}`}>{locale==="ar"?'وصف المنتج ':'details card'}</h1>
            {locale==="ar"?
<p>منتج عالي الجودة تم شراء اكثر من 100 مرة  وكلي التقيمات ايجابية بالضافة الي سعرة االميز </p>
:<p className="ml-[5px]">details card .................</p>

            }
<ProductOther/>
        </div>
<ToastContainer/>

        </>
    );
};

