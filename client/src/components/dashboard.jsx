import React from "react"
import Foreground from "../pages/Foreground";
import Background from "../pages/Background";
const Dashboard = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Foreground/>
      <Background/>
    </div>
  )
}

export default Dashboard
