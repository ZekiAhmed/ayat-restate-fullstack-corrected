import "./layout.scss"
import Navbar from "../../components/navbar/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="layout">
      <div className="navba">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout