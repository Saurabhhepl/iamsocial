import "./navbar.scss";
// MUI Components
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
// React Router dom
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

import { useDispatch } from "react-redux";

const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  // Logout
  const storedUsername = localStorage.getItem('username');
  const history=useNavigate();
  const dispatch=useDispatch();
  const handleLogout = () => {
  
    dispatch(logoutUser( ));
    history("/login")
  };
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
        
            alt=""
          />
          <span>{storedUsername}</span>

          <Button variant="contained" color="primary" onClick={handleLogout} >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
