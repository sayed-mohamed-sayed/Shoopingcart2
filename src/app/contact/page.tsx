
function page() {
    return (
        <div>
            <div className="w-[100%]">
<h1 className="text-center font-black text-[20px] " >يسعدنا سماع ردودكم </h1>
            </div>
<div className="flex flex-col justify-center text-center items-center mt-16  mb-20 ">
<input className="pr-4 focus:outline-none mb-1 w-[70%] h-6 rounded-sm border-b-[1px] border-solid border-[#2e3e5b]" placeholder="اكتب اسمك" type="text" />
<input className="pr-4 focus:outline-none mb-1 w-[70%] h-6 rounded-sm border-b-[1px] border-solid border-[#2e3e5b]" placeholder="اكتب ايميلك" type="email" name="" id="" />
<textarea name="" className="pr-4 focus:outline-none mb-2 w-[70%] h-16 rounded-sm border-b-[1px] border-solid border-[#2e3e5b] resize-none" placeholder="ارسل لنا رسالة" />
<div className="w-[70%] text-start">

<button className="bg-[#2e3e5b] rounded-sm text-white text-center font-bold  w-[100px]"> ارســــال</button>
</div>
</div>
        </div>
    );
};

export default page;