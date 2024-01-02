"use client"
import Image from "next/image";
import { products } from "../../data/data";
import { useState,useEffect } from "react";
import stars from "../../../../public/stars.webp"
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Page() {
const [change ,setchange]=useState("")
const [starImages, setStarImages] = useState([]);
 

const toastify=()=>{
    toast.success("تم اضافة المنتج الي سلة المشتريات " ,{position:toast.POSITION.TOP_RIGHT})
}

useEffect(() => {
const starImagesArray = [];

for (let i = 0; i < 5; i++) {
starImagesArray.push(stars);
}

setStarImages(starImagesArray as never[])
}, []);



return (
<div className="mt-20">

<div className="w-screen "></div>
<h1 className=" text-start mr-10 text-lg font-bold ">عروض كبيرة لمدة <span className="text-[red]">24 ساعة فقط</span></h1>
<div className="flex justify-center flex-wrap ">

{
products&&products.map((i:any)=>(
    <div className="m-2 border relative border-black border-solid cursor-pointer" key={i.id}>
    <Link href={`/products/${i.id}`}>

<div className="absolute w-[80px] h-[80px] top-2 right-2 bg-red-500 rounded-full flex justify-center items-center flex-col text-white font-bold ">
<span>خصم</span>
<span>{i.offers}</span>
</div>
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
<h2 className="m-2 ">بدلا من <span className="text-red-700 before:absolute  before:bg-red-700 before:w-[30px] before:h-[2px]  before:bottom-5">{i.priceoffer}</span></h2>
</div>
</Link>
<div className="flex justify-center">
<button className="bg-[#223f63] m-2 pl-2 pr-2 p-[1px] rounded-sm text-white">شراء الان</button>
<button className="bg-[#dcdada] m-2 pl-2 pr-2 p-[1px] rounded-sm"  onClick={()=>toastify()}>اضف للسلة</button>
</div>
</div>
))
}
</div>
<ToastContainer/>
</div>
);
};

export default Page;