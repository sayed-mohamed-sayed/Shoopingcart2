import { Link } from "@/navigation";
import { useLocale } from "next-intl";

function Login() {

const locale=useLocale()
  return (
        <div className="">
    <form action="">
        <div className="w-[100%] flex justify-center items-center  flex-col mt-10">

        <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[60%]" type="text" name="Name" id=""  placeholder={`${locale==='ar'?'الاســم':'Name'}`}/>
        <input  className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[60%]" type="email" name="email" id=""  placeholder={`${locale==='ar'?'الايميل':'Email'}`} />
        <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[60%]" type="password" name="password" id="" placeholder={`${locale==='ar'?'كلمة السر':'Password'}`} />
      <h1>{locale==='ar'?'لدي حساب بالفعل !':' acount'}  
        <Link href={"/register/Login"}>
        <span className="cursor-pointer bg-[#e6c52f] rounded-xl text-white pr-2 pl-2 ">{locale==="ar"?'تسجيل الدخول':'signin'}</span>
        </Link>
      </h1>
      <button className="w-[60%] dark:bg-black bg-[#223f63] text-white rounded-sm text-lg mb-16">{locale==='ar'?'انشاء حساب':'signin'}</button>
        </div>

    </form>
        </div>
    );
};

export default Login;