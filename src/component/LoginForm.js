import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export default function LoginForm({handleLogin}) {
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    function changeHandler(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault()
        handleLogin(true)
        toast.success("Logged In")
        navigate("/dashboard")
        console.log("Printing the Form Data:")
        console.log(formData)
    }

    return (
        <form onSubmit={submitHandler}>
            <label clasName="w-full">
                <p className="text-base my-2">Email Address <sup className='text-red-400'>*</sup></p>
                <input
                    required
                    className="bg-gray-900 rounded-lg text-gray-100 w-full p-3 outline-none "
                    style={{ boxShadow: 'inset 0 -1px 0px rgba(255, 255, 255, 0.18)' }}
                    type="text"
                    name="email"
                    placeholder="Enter email id"
                    onChange={changeHandler}
                    value={formData.email} />
            </label>

            <label className="w-full relative">
                <p className="text-base my-2 mt-4">Password <sup className="text-red-400">*</sup></p>
                <input 
                    required
                    className="bg-gray-900 rounded-lg text-gray-100 w-full p-3 outline-none"
                    style={{ boxShadow: 'inset 0 -1px 0px rgba(255, 255, 255, 0.18)' }}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    value={formData.password} />

                <span 
                className="absolute right-3 bottom-[2rem] cursor-pointer"
                onClick={() => { setShowPassword((prev) => !prev) }}>
                    {showPassword ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />}
                </span>

                <Link to="/forgot"><p className="text-sm max-w-max mt-1 ml-auto text-blue-300">Forget Password</p></Link>
            </label>




            <button className="w-full mt-12 my-4 text-black font-semibold flex justify-center items-center p-2 px-3 rounded-lg bg-yellow-500">Sign In</button>
        </form>
    )
}