import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"

export default function Template({ title, desc1, desc2, image, formType, handleLogin }) {
    return (
        <section className="w-11/12 max-w-[1160px] mx-auto py-12 flex justify-between items-start gap-x-12">
            <div className="w-11/12 max-w-[450px] flex flex-col gap-4">
                <h1 className="font-semibold text-3xl">{title}</h1>
                <p className="text-md flex flex-col">
                    <span className="text-opacity-70 text-white">{desc1}</span>
                    <span className="text-blue-300 italic">{desc2}</span>
                </p>
                {formType === "signup" ? <SignUpForm handleLogin={handleLogin} /> : <LoginForm handleLogin={handleLogin} />}

                <div className="flex w-full gap-2 justify-center items-center">
                    <div className="bg-gray-800 w-full h-[1px]"></div>
                    <span className="text-gray-800">OR</span>
                    <div className="bg-gray-800 w-full h-[1px]"></div>
                </div>

                <button 
                onClick={() => {
                    toast.error("Facility not currently available.")
                }}
                className=" flex w-full justify-center items-center rounded-lg font-medium text-gray-100 border border-gray-800 px-2 gap-x-2 mt-4 py-3 ">
                    <FcGoogle/>
                    <p>Sign in with Google</p>
                </button>
            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src="./frame.png" width={558} height={584} loading="lazy" alt="frame" />
                <img src={image} className="absolute -top-4 right-4" width={558} height={584} loading="lazy" alt="students" />
            </div>
        </section>
    )
}