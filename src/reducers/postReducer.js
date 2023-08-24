const initialState = {
    user: null,
    isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        
        case 'LOGIN_SUCCESS':
            console.log(action.type);
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                
               
            };
        
        case 'LOGIN_FAILURE':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: 'Invalid credentials'
            };
        // Other cases and reducer logic

        case 'REGISTER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case 'REGISTER_FAILURE':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: 'Invalid credentials'
            };

        case 'LOGOUT':
            return {
                ...state,
                user: null,
             
            };
        default:
            return state;
    }
};



export default authReducer;


