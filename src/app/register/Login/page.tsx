"use client"
import Link from "next/link";
import { useState } from "react";

function Login() {
const [email ,setemail]=useState("")
const admin=()=>{
  if (email==="sa3343@gmail.com") {
    console.log("l");
    
  }
}

  return (
        <div className="">
{/* <h1>سجل دخولك الان</h1>             */}
    <form action="">
        <div className="w-[100%] flex justify-center items-center  flex-col mt-10">

        <input onChange={(e)=>setemail(e.target.value)} className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[60%]" type="email" name="email" id=""  placeholder="الايميل" />
        <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[60%]" type="password" name="password" id="" placeholder="كلمة السر" />
      <h1>ليس لدي حساب ؟   
        <Link href={"/register/Signin"}>

        <span className="cursor-pointer bg-[#e6c52f] rounded-xl text-white pr-2 pl-2 ">انشاء حساب</span>
        </Link>
        </h1>
      <button className="w-[60%] bg-[#223f63] text-white rounded-sm text-lg mb-16" onClick={()=>admin()}>تسجيل الدخول</button>
        </div>

    </form>
        </div>
    );
};

export default Login;