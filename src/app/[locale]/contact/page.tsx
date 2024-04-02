import { useLocale } from "next-intl";

function Page() {

    const locale = useLocale()
    return (
        <div>
            <div className="w-[100%]">
                <h1 className="text-center font-black text-[20px] animate-bounce " >{locale === 'ar' ? 'يسعدنا سماع ردودكم' : 'happy to send me'}</h1>
            </div>
            <div className="flex flex-col justify-center text-center items-center mt-16  mb-20 ">
                <input className=" pr-4 focus:outline-none mb-1 w-[70%] h-6 rounded-sm border-b-[1px] border-solid border-[#2e3e5b]" placeholder={`${locale === 'ar' ? 'اكتب اسمك' : 'write name'}`} type="text" />
                <input className="pr-4 focus:outline-none mb-1 w-[70%] h-6 rounded-sm border-b-[1px] border-solid border-[#2e3e5b]" placeholder={`${locale === 'ar' ? 'اكتب ايميلك' : 'write email'}`} type="email" name="" id="" />
                <textarea name="" className="pr-4 focus:outline-none mb-2 w-[70%] h-16 rounded-sm border-b-[1px] border-solid border-[#2e3e5b] resize-none" placeholder={`${locale === 'ar' ? "ارسل لنا رسالة" : 'send message'}`} />
                <div className="w-[70%] text-start">

                    <button className="dark:bg-black bg-[#2e3e5b] rounded-sm text-white text-center font-bold  w-[100px]">{locale === 'ar' ? 'ارســــال' : 'send'}</button>
                </div>
            </div>
        </div>
    );
};

export default Page;