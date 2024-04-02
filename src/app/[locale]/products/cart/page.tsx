    "use client"  
import { products } from "@/app/[locale]/data/data";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ProductOther from "../productsther/page";
import { useLocale } from "next-intl";
import { products_en } from "../../data/data_en";

function Page() {
    


const locale=useLocale()

const product=locale==="ar"?products:products_en.map((i)=>{
    return i
})


const toastify=()=>{
    toast.error(locale==="ar"?"تم حذف المنتج":"delete card sucess" ,{position:toast.POSITION.TOP_RIGHT})
}

    return (
        <div className="relative dark:bg-black dark:text-white">
{/* <Image  className="w-[100%] h-[400px]" width={500} height={500} src="/noproduct.jpg" alt="Image"/>             */}
        
        <h1 className="text-center font-black text-2xl animate-bounce">{locale==="ar"?'سلة المشتريات':'card'}</h1>
       <div className="">

        {
            product.map((i)=>(
        <div className="h-[200px] flex justify-start items-start m-2 relative border border-solid dark:border-white border-[#0000002b]" key={i.id}>
<Image  className="w-[40%] sm:w-[200px] h-[199px]" width={250} height={300} src={i.img} alt="Image"/>            
<div className={`${locale==="ar"?'mr-6':'ml-6'} w-[60%] sm:w-[75%] h-[200px] relative`}>
    <h1>{i.title}</h1>
    <div className="flex justify-center mt-2 mb-4  items-center border border-solid border-neutral-500 w-[100px] relative">
<button  className="absolute right-1  border-l p-[2px] border-neutral-500">+</button>
<p>1</p>
<button  className="absolute left-1  border-r p-[2px] border-neutral-500">-</button>
            </div>
    <div className="mb-4 sm:mb-0">
        <h1>{i.price} {locale==="ar"?'جنية ':'pound'}</h1>
    </div>
{
    locale==="ar"?<button onClick={()=>toastify()} className=" absolute  sm:left-1 md:left-1 lg:left-0 sm:top-4  font-medium bg-[#223f63] text-white w-20 rounded-sm">حذف المنتج</button>
:<button onClick={()=>toastify()} className=" absolute  sm:right-1 md:right-1 lg:right-0 sm:top-4  font-medium bg-[#223f63] text-white w-20 rounded-sm">delete card</button>

}
</div>
        </div>

            ))
        }
       <div className="w-screen text-center ">
       <button className=" text-center p-1 bg-[#223f63] font-black text-white w-[50%]  rounded-sm">{locale==="ar"?'اتمام عملية الشراء':'buy now'}</button>
       </div>
       <ToastContainer/>
       </div>
       <div className="">

       <ProductOther/>
       </div>
        </div>
    );
};

export default Page;