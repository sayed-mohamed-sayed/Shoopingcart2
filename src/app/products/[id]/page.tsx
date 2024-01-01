"use client"
import { products } from "@/app/data/data";
import Image from "next/image";
import cart from "../../../../public/cart.png"
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ProductOther from "../productsther/page";

export default function Page({params}:any) {

const data=products.find(i=>i.id==params.id)


const toastify=()=>{
    toast.success("تم اضافة المنتج الي سلة المشتريات " ,{position:toast.POSITION.TOP_RIGHT})
}

const [img ,setimg]=useState(data&&data.img)
const [plus ,setplus]=useState(1)

    return (
        <>
        <div className="flex flex-col  sm:flex sm:flex-row ">
            <div className="flex items-start ">
                <div className="img1">
                <Image width={400} height={400} src={img} alt="image"/>
                </div>
                <div className="img mr-2">
                <Image onClick={()=>setimg(data&&data.img)} className="m-[2px] cursor-pointer" width={130} height={130} src={data&&data.img} alt="image"/>
                <Image onClick={()=>setimg(data&&data.img)} className="m-[2px] cursor-pointer" width={130} height={130} src={data&&data.img} alt="image"/>
                <Image onClick={()=>setimg(cart)} className="m-[2px] cursor-pointer" width={130} height={130} src={cart} alt="image"/>
                </div>
            </div>
            <div className="w-[100%] flex flex-col mt-16 sm:mt-0">
<div className="flex justify-start items-start w-[100%] h-6 relative font-bold text-lg mr-4">
<h1>{data&&data.title}</h1>
<h2 className="absolute right-[200px]">{data.price*plus} جنية</h2>

</div>
           <div className="flex justify-start items-center mt-4 w-[100%]   font-bold text-lg mr-4">
            <h1 className="ml-[20px]">الكمية</h1>
            <div className="flex justify-center ml-4 items-center border border-solid border-neutral-500 w-[120px] relative">
<button disabled={plus==10} onClick={()=>setplus(plus+1)} className="absolute right-1  border-l p-[2px] border-neutral-500">+</button>
<p>{plus}</p>
<button disabled={plus==1} onClick={()=>setplus(plus-1)} className="absolute left-1  border-r p-[2px] border-neutral-500">-</button>
            </div>
           </div>
            <div className="mt-4 flex justify-start items-center font-bold text-xl mr-4 ">
<button className="bg-[#223f63] tet-white border border-neutral-500 text-white w-[100px] ml-4 rounded-sm">شراء الان</button>
           <div className="flex border border-neutral-500 bg-[#dcdada] rounded-sm pr-1 pl-1">
            <button onClick={()=>toastify()} className="">اضف الي السلة</button>
            <Image className="mr-2" width={20} height={20} src={cart} alt="image"/>
           </div>
            </div>
            </div>
        </div>
        <div className="font-bold mt-10">
            <h1 className="text-xl">وصف المنتج </h1>
            <p>ةنممتىهمةةةلا  لاهعى  اعلانكتلا نىكنم خىنت ع هعاكلاتلا ححاعلا هعالاىة علاا ز ىعهحهعلاىةو علانتىةوز عهحلاتنة ععانتى  ىمتنتىزةومن اىنتىخحخهع عهلاهتنى عنتلاة هامكنىة ت</p>
<ProductOther/>
        </div>
<ToastContainer/>

        </>
    );
};

