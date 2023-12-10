import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./dashboard";
import { Login } from "../pages/Login/login";
import { Register } from "../pages/Register/register";
import { Otp } from "../pages/Otp/Otp";
import {Error} from "../pages/Error Page/Error";
const main = () => {
  return (
    <div className="w-full h-screen bg-zinc-100">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/otp" element={<Otp/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default main;
