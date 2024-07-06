import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import SignUp from "./component/SignUp"
import Forgot from "./component/Forgot";
import Dashboard from "./component/Dashboard";
import NotFound from "./component/NotFound";
import { useState } from "react";
import PrivateRoute from "./component/PrivateRoute";

export default function App() {
  const [isLoggedIn, handleLogin] = useState(false)

  return (
    <div className="bg-gray-950 text-white w-full min-h-[100vh] flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} handleLogin={handleLogin} />

      <Routes>
        <Route path="/" element={<Main />}> 
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
          <Route path="/signup" element={<SignUp handleLogin={handleLogin}/>} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFound/>} />
        </Route>
        
      </Routes>
    </div>
  );
}