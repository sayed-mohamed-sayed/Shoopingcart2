import Image from "next/image";
import { child, clothes, elect, home, micap } from "../data/data";

function Footer() {
    return (
        <div className="text-[#3f4042] bg-[#f8f5f5] relative w-[100%] overflow-hidden">
            <Image  className=" w-[100%] h-[300px]" width={200} height={200} src="/foter.jpg" alt="Image" />
        
        <div className="flex justify-start w-screen absolute top-0">
            <div className="m-2 sm:m-6 cursor-pointer">
                <h1 className="text-[25px] font-bold">دعنا نساعدك </h1>
                <p>الحساب الخاص بك</p>
                <p>طلباتك</p>
                <p>سياسات التوصيل</p>
                <p>سياسة الإرجاع والاستبدال</p>
                <p>سياسة الإرجاع والاستبدال</p>
                <p>اتفاقية المستخدم</p>
            </div>
            <div className="m-2 sm:m-6 cursor-pointer">
                <h1 className="text-[25px] font-bold">تواصل معنا علي </h1>
                <p>010758765</p>
                <p>011568677</p>
                <p>faki@amail.com</p>
            </div>
            <div className="flex m-2 sm:m-6  flex-wrap">
                <Image className="w-[40px] sm:w-[60px] h-[60px]" src="/insta.png" width={50} height={50} alt="Image" />
                <Image className="w-[40px] sm:w-[60px] h-[60px]" src="/faceb.png" width={50} height={50} alt="Image" />
                <Image className="w-[40px] sm:w-[60px] h-[60px]" src="/phone.png" width={50} height={50} alt="Image" />
            </div>
            </div>
            <div className="flex items-start flex-wrap justify-start w-screen bg-[#2e3e5b]">
            <div className= "  relative text-white pr-4 ">
                <h1 className="font-bold text-[20px] text-[#e6c52f]">الكترونيات</h1>
                <div className="grid grid-cols-2 gap-0">

                {
                    elect&&elect.map((i,o)=>(
                        <div  key={o} className="relative">
                            <div >{i}</div>
                        </div>
                    ))
                }
                </div>
                </div>
                <div className= "w-[150px]  relative text-white pr-4 ">
                <h1 className="font-bold text-[20px] text-[#e6c52f]">المنزل</h1>
                <div className="grid grid-cols-1 gap-0">

                {
                    home&&home.map((i,o)=>(
                        <div  key={o} className="relative">
                            <div >{i}</div>
                        </div>
                    ))
                }
                </div>
                </div>
            <div className=" w-[150px] relative text-white pr-4">
                <h1 className="font-bold text-[20px] text-[#e6c52f]">الجمال والعطور </h1>
                <div className="grid grid-cols-1 gap-0">
                {
                    micap&&micap.map((i,o)=>(
                        <div className="" key={o}>
                            <div className="">{i}</div>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className= " w-[150px]  relative text-white pr-4 ">
                <h1 className="font-bold text-[19px] text-[#e6c52f]">ملابس واكسسوارات</h1>
                <div className="grid grid-cols-1 gap-0">

                {
                    clothes&&clothes.map((i,o)=>(
                        <div  key={o} className="relative">
                            <div >{i}</div>
                        </div>
                    ))
                }
                </div>
                </div>
                
                <div className= " w-[150px]  relative text-white pr-4 ">
                <h1 className="font-bold text-[20px] text-[#e6c52f]">اطفال</h1>
                <div className="grid grid-cols-1 gap-0">

                {
                    child&&child.map((i,o)=>(
                        <div  key={o} className="relative">
                            <div >{i}</div>
                        </div>
                    ))
                }
                </div>
                </div>
            </div>
            </div>
    );
};

export default Footer;