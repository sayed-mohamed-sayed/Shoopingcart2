import Header from "./Header/page";
import Input from "./Input/page";
function page() {
    return (
        <div className="flex mt-[-15px] w-[100%]">
            <div className="w-[30%] bg-[#223f63] h-[400px]">
            <Header/>
            </div>
            <div className="w-[70%] text-center">

            <Input/>
            </div>
        </div>
    );
};

export default page;