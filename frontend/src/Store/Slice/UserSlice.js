import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_SUCCESS,
    // PRODUCT_DETAILS_FAIL,
});

const UserSlice = createSlice({
    name:"user",
    initialState:{
        status: STATUS.ERROR,
        userDetail : localStorage.getItem("yogesh_login_signup_register") ? JSON.parse(localStorage.getItem("yogesh_login_signup_register")) : {},
        // userLogin : {},
        // userLogin : {}
        userLogin : localStorage.getItem("yogesh_login_signup") ? JSON.parse(localStorage.getItem("yogesh_login_signup")) : {}
    },
    reducers:{
        getStatus(state,action){
            state.status = action.payload;
        },
        getUserDetail(state,action){
            state.userDetail = action.payload
        },
        getUserLogin(state,action){
            state.userLogin = action.payload
        }


    }
})

export default UserSlice.reducer;

export const {getStatus , getUserDetail , getUserLogin } = UserSlice.actions


export function RegisterReducer(name , email , password){
    // console.log("slice" , obj); 
    return async function RegisterThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))

        // const config = { headers : { "Content-Type" : "application/json"}};
        try{

            //  console.log("slice" , obj); 

            
            // const {data} = await axios.post(`/api/login`, { email , password} , config)

            const {data} = await axios.post(`https://yogesh-login-host-api.vercel.app/api/register`, {name , email , password})
            // const {data} = await axios.post(`http://localhost:4000/api/register`, {name , email , password})
            // console.log("datad ", data)
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getUserDetail(data),
            )

            localStorage.setItem('yogesh_login_signup_register' , JSON.stringify(data));


        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}




// login 

export function LoginReducer( email , password){
    // console.log("slice" , obj); 
    return async function LoginThunk(dispatch , getState) {

        dispatch(getStatus(STATUS.LOADING))

        // const config = { headers : { "Content-Type" : "application/json"}};
        try{

            //  console.log("slice" , obj); 

            
            // const {data} = await axios.post(`/api/login`, { email , password} , config)

            const {data} = await axios.post(`https://yogesh-login-host-api.vercel.app/api/login`, { email , password})
            // const {data} = await axios.post(`http://localhost:4000/api/login`, { email , password})
            // console.log("datad ", data)
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getUserLogin(data),
            )

            // localStorage.setItem('yogesh_login_signup' , JSON.stringify(getState().user.userLogin))  
            localStorage.setItem('yogesh_login_signup' , JSON.stringify(data));
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}


// http://192.168.1.3:3000 
