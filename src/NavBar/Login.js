import React, { useState } from "react";
import Image from "../Image/img.jpg"
import LoginImg from "../Image/2.jpg"
import { useNavigate } from "react-router";


export default function Login() {
  // Form Validations-1
  const initialState = { email: '', password: '' }
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState({});
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    setError(Validate(user));
  }
  const Validate = (user) => {
    const errors = {};
    var usEmail = user.email;
    var pwd = user.password;
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (!usEmail) {
      errors.email = "Email is Required";
    }
    else if (!regex.test(usEmail)) {
      errors.email = "Enter the valid email"
    }
    if (!pwd) {
      errors.password = "Password is Required"
    }
    else if (!strongRegex.test(pwd)) {
      errors.password = "Enter the valid password"
    }
    return errors;
  }
  //submit button
  React.useEffect(() => {
    if (localStorage.getItem('auth'))
      navigate('/Login')


  }, [])

  const HandleSubmit = (event) => {
    if (user.email === 'ragulkumar0244@gmail.com' && user.password === 'admin') {
      navigate("/Home")
      localStorage.setItem('auth', true)
    }
    else {
      alert("Invalid Autentications")
    }
  }

  return (
    <div className="bg-fixed bg-no-repeat bg-center bg-cover h-screen overflow-x-hidden " style={{ backgroundImage: `url(${Image})` }}>
      <div className="max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="border rounded-xl bg-white relative top-8">
          <div className="flex justify-center flex-wrap">
            {/* Method-1 */}
            <div className="flex basis-6/12 p-5 xl:p-10">
              <div className="mt-4  p-5 xl:p-20">
                <h1 className="text-center font-bold text-lg">Login</h1>
                <form action="#" className="mt-5 flex flex-col" onSubmit={HandleSubmit}>
                  <label htmlFor="email" className="">Email:</label>
                  <input type="email" name="email" value={user.email} className="border-b-2 border-gray-300 w-80 md:w-80 lg:w-80 xl:w-80 p-2 outline-none" onChange={handleChange} />
                  {<div className='text-sm text-red-500 text-center'> {error.email} </div>}
                  <label htmlFor="pwd" className=" mt-9">Password:</label>
                  <input type="password" name="password" value={user.password} className="border-b-2 border-gray-300 w-80 md:w-80 lg:w-80 xl:w-80 p-2 outline-none" onChange={handleChange} />
                  {<div className='text-sm text-red-500 text-center'> {error.password} </div>}
                  <button className="border bg-black text-white p-3 lg:mt-6 mt-4 md:mt-6 xl:mt-6 rounded-lg text-sm" >Sign In</button>
                </form>
                <div className="flex justify-center mt-5">
                  <p className="text-sm">Already have an account?</p>
                  <a href="#" className="font-bold text-black text-sm">Log in here</a>
                </div>
              </div>

            </div>



            <div className="flex  basis-6/12 overflow-x-hidden ">
              <img src={LoginImg} className="w-fit " />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

