import React from 'react'
import Navbar from './Navigation';
import { Outlet } from 'react-router';
export default function WithoutNav() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}