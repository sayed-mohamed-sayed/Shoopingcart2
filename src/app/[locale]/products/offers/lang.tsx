














"use client"
import { useState,useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocale } from "next-intl";
function Lang({addcart,buynow}:any) {
    const locale=useLocale()
const toastify=()=>{
    toast.success(locale==="ar"?"تم اضافة المنتج الي سلة المشتريات ":"The product has been added to the buyer" ,{position:toast.POSITION.TOP_RIGHT})
}

return (
    <div className="">

<div className="flex justify-center">
<button className="bg-[#223f63] m-2 pl-2 pr-2 p-[1px] rounded-sm text-white dark:bg-black">{buynow}</button>
<button className="bg-[#dcdada] m-2 pl-2 pr-2 p-[1px] rounded-sm"  onClick={()=>toastify()}>{addcart}</button>
</div>
<ToastContainer/>
</div>
);
};

export default Lang;