"use client"
import Image from "next/image";
import { header } from "../data/data";
import Link from "next/link";
import  './../globals.css'  
import { useState } from "react";
export default function Header () {
    
const [toggle ,settoggle]=useState(false)
console.log(toggle);


    return (
        <div className="">

        <div className=" flex justify-around items-center bg-[#0000001c]">
        <div className="logo">
            <Image className="w-[170px] h-[45px] Logo" width={200} height={50} src="/Logoss.png" alt="Logo"/>

        </div>
        <div className="input w-[50%] h-8">
            <input className="focus:outline-none w-[100%] rounded h-[100%] pr-4 text-black" type="search" name="search" placeholder="ابحث عن ما تريد" />
        </div>

<div className="flex contact ">
        <Link href={"/register/Login"}>
    <div className="flex items-center cursor-pointer">
<Image width={20} height={20} src="/logn.png" alt='/login'/>
    <p className="font-bold mr-2">تسجيل الخول </p>
    </div>
        </Link>
        <Link href={"/contact"}>

    <div className="flex items-center cursor-pointer mr-4">
    <Image width={20} height={20} src="/red.png" alt='/login'/>
    <p className="font-bold mr-2">تواصل معنا</p>   
    </div>
        </Link>
</div>
        </div>
        <div className=" w-[100%] mb-4 relative  bg-[#2e3e5b] h-[40px] pt-1">
<div   className="toggles ">
<input type="checkbox" id="checkbox"/>
<label onClick={()=>settoggle(!toggle)} htmlFor="checkbox" className="toggle">
  <div className="bar bar--top"></div>
  <div className="bar bar--middle"></div>
  <div className="bar bar--bottom"></div>
</label>

</div>
          <div style={{height:toggle&&"200px"}} className="flex justify-start items-start card">
            {
                header&&header.map((i)=>(
                    <div key={i.id} className="bg-[#2e3e5b] text-white ml-4 font-bold cards relative right-2 ">
                        <nav>
                            <ul>
                                <li><Link href={i.url}>{i.title}</Link></li>
                            </ul>
                        </nav>
                        </div>
                ))
            }
            <div className="flex contactfill ">
        <Link href={"/register/Login"}>
    <div className="flex items-center cursor-pointer">
<Image width={20} height={20} src="/logn.png" alt='/login'/>
    <p className="font-bold mr-2">تسجيل الخول </p>
    </div>
        </Link>
        <Link href={"/contact"}>

    <div className="flex items-center cursor-pointer mr-0 sm:mr-4">
    <Image width={20} height={20} src="/red.png" alt='/login'/>
    <p className="font-bold mr-2">تواصل معنا</p>   
    </div>
        </Link>
</div>

          </div>
          <div className="flex items-start w-screen">
            <div style={{display:"none"}} className="absolute right-2 bottom-2 cursor-pointer toggle ">
            </div>
            <div className="absolute left-2 bottom-2 cursor-pointer">
                <Link href={`/products/cart`}>
                <span className=" top-2 left-3 relative w-[20px] h-[20px] flex justify-center rounded-full bg-[#e6c52f]">0</span>
                <Image width={20} height={20} src="/cart.png" alt="Image"/>
                </Link>
            </div>
          </div>
        </div>
                </div>
    );
};
