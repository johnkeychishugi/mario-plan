const initState = {
    authError: null,
    errorMessage: null
}

const authReducer = (state = initState,action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login failed', action.err);
            return {
                ...state,
                errorMessage:action.err.message,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null,
                errorMessage: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Sign out');
            return state
        case 'SIGNOUT_ERROR':
            return {
                ...state,
                errorMessage:action.err,
                authError: 'sign out failed'
            }   
        default:
            return state;
    }
}

export default authReducer;