import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { loginUser, registerUser } from '../../actions/authActions';
import { useEffect } from "react";

 
import "./login.scss";

const Login = () => {
  // State define
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history=useNavigate();
  
 

  // Load username and password from local storage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = sessionStorage.getItem('password');

    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser(username, password));
    alert("Login success")
    history("/"); 
    if(!username){
      history("/login"); 
    }
    
  };

  const handleRegister = () => {
    const newUser = { username, password, email };
    dispatch(registerUser(newUser));
  };

  // Store username in local storage, password in session storage on login
  useEffect(() => {
    if (auth.user) {
      localStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
    }
  }, [auth.user, username, password]);
  // Use useEffect to watch for changes in auth state and redirect
 

  
  return (
    <div className="login" >
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <div className="form">
            <input type="text" placeholder="Username" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            
            />
            <input type="password" placeholder="Password"
            
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            
            {auth.success && <p style={{ color: 'green' }}>{auth.success}</p>}

            {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
