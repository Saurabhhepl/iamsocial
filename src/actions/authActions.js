import axios from 'axios';


export const loginUser = (username, password) => async dispatch => {
    try {
        const response = await axios.post('http://164.52.212.11/knowledge/api/auth/signin', {
            username: username,
            password: password
        });
        console.log(response)
            
        const user = response.data;
         // Assuming the response contains the user data
         console.log(user.email,user.roles)

       

        if (user) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });
   
        } else {
            dispatch({ type: 'LOGIN_FAILURE' });
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE' });
    }
};

// Logout Action
export const logoutUser = () => async dispatch => {
    // Clear user data from local storage
    localStorage.clear();

    // Dispatch the logout action
    dispatch({ type: 'LOGOUT' });
};

// Register User
export const registerUser = (newUser) => async dispatch => {
    try {
        const response = await axios.post('http://164.52.212.11/knowledge/api/auth/signup', newUser);

        const registeredUser = response.data; // Assuming the response contains the registered user data
        console.log(registeredUser)

        if (registeredUser) {
            dispatch({ type: 'REGISTER_SUCCESS', payload: registeredUser });
        } else {
            dispatch({ type: 'REGISTER_FAILURE' });
        }
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE' });
    }
};





