import Stories from "../../components/stories/Stories"
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"
import LeftBar from "../../components/leftBar/LeftBar"
import Post from "../../components/post/Post"
import Share from "../../components/share/Share"
import { Outlet } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

import "./home.scss"

const HomePage = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
            <div className="home">

              <Stories />
              <Share/>
              <Post/>
            </div>

          </div>
          <RightBar />
        </div>


      </div>

    </>




  )
}

export default HomePage;