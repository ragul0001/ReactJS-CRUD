import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router";

export default function Navigation() {
  const [logout, setLogout] = useState(false);

  const navigate = useNavigate()
  React.useEffect(() => {
    if (!localStorage.getItem('auth'))
      navigate('/Login')

  }, [logout])
  const handleClick = (e) => {
    localStorage.removeItem('auth');
    setLogout(true)
  }


  return (
    <div>
      {/* <!-- navbar goes here --> */}
      <nav class="bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">

            <div class="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span class="font-bold">Dazan&Co's</span>
                </a>
              </div>
              {/* 
        <!-- primary nav --> */}

            </div>
            <div class="hidden md:flex items-center space-x-1">
              <NavLink to='/home '><a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a></NavLink>
              <NavLink to='/About'><a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">About</a></NavLink>
              <NavLink to='/ce'><a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a></NavLink>
              <NavLink to='/cee'><a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">ViewUser</a></NavLink>

            </div>
            {/* <!-- secondary nav --> */}
            <div class="hidden md:flex items-center space-x-1">

              <NavLink to='/login'><a href="#" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300" onClick={handleClick}>Logout</a></NavLink>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div class="mobile-menu hidden md:hidden">
          <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
          <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Company</a>
          <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </nav>
    </div>
  )
}
