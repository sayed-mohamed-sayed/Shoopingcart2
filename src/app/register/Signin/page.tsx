import Link from "next/link";

function Login() {
    return (
        <div className="">
{/* <h1>سجل دخولك الان</h1>             */}
    <form action="">
        <div className="w-[100%] flex justify-center items-center  flex-col mt-10">

        <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[60%]" type="text" name="Name" id=""  placeholder="الاســـم" />
        <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[60%]" type="email" name="email" id=""  placeholder="الايميل" />
        <input className="pr-2 mb-1 rounded-sm focus:outline-none h-6 w-[60%]" type="password" name="password" id="" placeholder="كلمة السر" />
      <h1> لدي حساب بالفعل !  
        <Link href={"/register/Login"}>
        <span className="cursor-pointer bg-[#e6c52f] rounded-xl text-white pr-2 pl-2 ">تسجيل الدخول</span>
        </Link>
      </h1>
      <button className="w-[60%] bg-[#223f63] text-white rounded-sm text-lg mb-16">انشاء حساب</button>
        </div>

    </form>
        </div>
    );
};

export default Login;