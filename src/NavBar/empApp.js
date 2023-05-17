import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import WithNav from './WithNav';
import WithoutNav from './WithoutNav';
import CopyApp from './AddUserForm';
import Copys from './EditUserForm';
import CopyApps from './copyApp';
import CopyAppe from './ViewUser';
import { useRef } from "react";


// import { useIdleTimer } from "react-idle-timer";
import AutoLogOut from "./IdleTimer"


export default function EmpApp() {
return (
    <div>
      <Router>

        <Routes>

          <Route element={<WithoutNav />}>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
          </Route>
          <Route element={<WithNav />}>
            <Route exact path='/home' element={[< Home />, <AutoLogOut />]}></Route>
            <Route exact path='/About' element={[<About />, <AutoLogOut />]}></Route>
            <Route exact path='/ce' element={[<CopyApps />, <AutoLogOut />]}></Route>
            <Route exact path='/cee' element={[<CopyAppe />, <AutoLogOut />]}></Route>

          </Route>

        </Routes>

      </Router>

    </div >
  )
}
