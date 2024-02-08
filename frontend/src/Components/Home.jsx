import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { LogOutReducer } from '../Store/Slice/UserSlice';

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutFunc = ()=>{
    dispatch(LogOutReducer());
    console.log("signOut")

    navigate('/login')

  }


  return (
    <div>
 <h2 style={{color: "rgb(51 79 135)"}}  className="my-3 display-3 fw-bold ls-tight"  >Hello There! U are Logged In </h2>
 <br /> <br /> <br /> <br /> 
 <button onClick={signOutFunc}>Sign Out </button>        
    </div>
  )
}

export default Home
