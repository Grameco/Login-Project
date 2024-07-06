import { Link } from "react-router-dom"
import toast from "react-hot-toast"

export default function NavBar({isLoggedIn, handleLogin}) {

    return (
        <nav className="w-11/12 max-w-[1160px] mx-auto flex justify-between items-center py-4 ">
            <Link to="/" ><img src="/StudyNotion.svg" alt="logo"width={160} height={32} loading="lazy" /></Link>

            <ul className="flex justify-center items-center gap-6">
                <li className=" text-white text-opacity-80 hover:text-opacity-100 transition-all duration-200"><Link to="/">Home</Link></li>
                <li className=" text-white text-opacity-80 hover:text-opacity-100 transition-all duration-200"><Link to="/about">About</Link></li>
                <li className=" text-white text-opacity-80 hover:text-opacity-100 transition-all duration-200"><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="flex justify-center items-center gap-4">
                {
                    !isLoggedIn && 
                    <Link to="/login"><button className="p-2 px-3 bg-gray-900 rounded-md border border-gray-800">Log in</button></Link>
                }
                {
                    !isLoggedIn && 
                    <Link to="/signup"><button className="p-2 px-3 bg-gray-900 rounded-md border border-gray-800">Sign up</button></Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/"><button 
                    className="p-2 px-3 bg-gray-900 rounded-md border border-gray-800"
                    onClick={() => {
                        handleLogin(false)
                        toast.success("Logged Out")
                    }}
                    >Log out</button></Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard"><button className="p-2 px-3 bg-gray-900 rounded-md border border-gray-800">Dashboard</button></Link>
                }
            </div>
        </nav>
    )
}