import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export default function SignUpForm({ handleLogin }) {

    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const [accountType, setAccountType] = useState("student")

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
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password do not match")
            return;
        }
        handleLogin(true)
        toast.success("Logged In")
        navigate("/dashboard")
        
        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing the Form Data:")
        console.log(finalData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="flex justify-center items-center rounded-full bg-gray-900 w-fit p-1"
                style={{ boxShadow: 'inset 0 -1px 0px rgba(255, 255, 255, 0.18)' }}>
                <div onClick={() => { setAccountType("student") }} className={`${accountType === "student" ? "bg-gray-950 text-opacity-100" : "bg-gray-900 text-opacity-80"} py-2 rounded-full px-5 transition-all duration-200 ease-in-out cursor-pointer`}>Student</div>
                <div onClick={() => { setAccountType("instructor") }} className={`${accountType !== "student" ? "bg-gray-950 text-opacity-100" : "bg-gray-900 text-opacity-80"} py-2 px-5 rounded-full transition-all duration-200 ease-in-out cursor-pointer`} >Instructor</div>
            </div>

            <div className="w-full flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <lebel className="w-[48%]">
                        <p className="text-base my-2 mt-4">First Name<sup className="text-red-400">*</sup></p>
                        <input
                            required
                            type="text"
                            className="bg-gray-900 rounded-lg text-gray-100 w-full p-3 outline-none"
                            style={{ boxShadow: 'inset 0 -1px 0px rgba(255, 255, 255, 0.18)' }}
                            name="firstName"
                            placeholder="Enter first name"
                            onChange={changeHandler}
                            value={formData.firstName} />
                    </lebel>

                    <lebel className="w-[48%]">
                        <p className="text-base my-2 mt-4">Last Name<sup className="text-red-400">*</sup></p>
                        <input
                            required
                            type="text"
                            className="bg-gray-900 rounded-lg text-gray-100 w-full p-3 outline-none"
                            style={{ boxShadow: 'inset 0 -1px 0px rgba(255, 255, 255, 0.18)' }}
                            name="lastName"
                            placeholder="Enter last name"
                            onChange={changeHandler}
                            value={formData.lastName} />
                    </lebel>
                </div>

                <label>
                    <p className="text-base my-2 mt-4">Email Address<sup className="text-red-400">*</sup></p>
                    <input
                        required
                        type="email"
                        className="bg-gray-900 rounded-lg text-gray-100 w-full p-3 outline-none"
                        style={{ boxShadow: 'inset 0 -1px 0px rgba(255, 255, 255, 0.18)' }}
                        name="email"
                        placeholder="Enter email address"
                        onChange={changeHandler}
                        value={formData.email} />
                </label>

                <div className="flex w-full justify-between items-center">
                    <label className="relative w-[48%]">
                        <p className="text-base my-2 mt-4">Create Password <sup className="text-red-400">*</sup></p>
                        <input required
                            type={showPassword1 ? "text" : "password"}
                            className="bg-gray-900 rounded-lg text-gray-100 w-full p-3 outline-none"
                            style={{ boxShadow: 'inset 0 -1px 0px rgba(255, 255, 255, 0.18)' }}
                            name="password"
                            placeholder="Enter Password"
                            onChange={changeHandler}
                            value={formData.password} />

                        <span
                            className="absolute right-3 bottom-[0.6rem] cursor-pointer"
                            onClick={() => { setShowPassword1((prev) => !prev) }}>
                            {showPassword1 ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />}
                        </span>
                    </label>

                    <label className="relative w-[48%]">
                        <p className="text-base my-2 mt-4">Confirm Password <sup className="text-red-400">*</sup></p>
                        <input required
                            type={showPassword2 ? "text" : "password"}
                            className="bg-gray-900 rounded-lg text-gray-100 w-full p-3 outline-none"
                            style={{ boxShadow: 'inset 0 -1px 0px rgba(255, 255, 255, 0.18)' }}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            value={formData.confirmPassword} />

                        <span
                            className="absolute right-3 bottom-[0.6rem] cursor-pointer"
                            onClick={() => { setShowPassword2((prev) => !prev) }}>
                            {showPassword2 ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />}
                        </span>
                    </label>
                </div>

                <button className="w-full mt-12 my-4 text-black font-semibold flex justify-center items-center p-2 px-3 rounded-lg bg-yellow-500">Create Account</button>
            </div>
        </form>
    )
}