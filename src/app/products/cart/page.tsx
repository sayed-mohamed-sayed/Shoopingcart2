    "use client"  
import { products } from "@/app/data/data";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ProductOther from "../productsther/page";

function page() {
    
const toastify=()=>{
    toast.error("تم حذف المنتج" ,{position:toast.POSITION.TOP_RIGHT})
}

    return (
        <div className="relative">
{/* <Image  className="w-[100%] h-[400px]" width={500} height={500} src="/noproduct.jpg" alt="Image"/>             */}
        
        <h1 className="text-center font-black text-2xl">سلة المشتريات</h1>
       <div className="">

        {
            products&&products.map((i)=>(
        <div className="h-[200px] flex justify-start items-start m-2 relative border border-solid border-[#0000002b]" key={i.id}>
<Image  className="w-[40%] sm:w-[200px] h-[199px]" width={200} height={300} src={i.img} alt="Image"/>            
<div className="mr-6 w-[60%] sm:w-[75%] h-[200px] relative">
    <h1>{i.title}</h1>
    <div className="flex justify-center mt-2 mb-4 ml-4 items-center border border-solid border-neutral-500 w-[100px] relative">
<button  className="absolute right-1  border-l p-[2px] border-neutral-500">+</button>
<p>1</p>
<button  className="absolute left-1  border-r p-[2px] border-neutral-500">-</button>
            </div>
    <div className="mb-4 sm:mb-0">
        <h1>{i.price} جنية </h1>
    </div>
<button onClick={()=>toastify()} className=" absolute  sm:left-1 md:left-1 lg:left-0 sm:top-4  font-medium bg-[#223f63] text-white w-20 rounded-sm">حذف المنتج</button>
</div>
        </div>

            ))
        }
       <div className="w-screen text-center ">
       <button className=" text-center p-1 bg-[#223f63] font-black text-white w-[50%]  rounded-sm">اتمام عملية الشراء</button>
       </div>
       <ToastContainer/>
       </div>
       <div className="">

       <ProductOther/>
       </div>
        </div>
    );
};

export default page;