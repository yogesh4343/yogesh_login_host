import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginReducer } from '../Store/Slice/UserSlice';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userLogin , userDetail} = useSelector(state=>  state.UserDetails);;
    const getEmail = userDetail.userRegisterOrNot.email;
    const getPassword = userDetail.userRegisterOrNot.password;
    // userDetail =="" ?console.log(" : ") : console.log(userDetail.userRegisterOrNot.email)


    // const [email , setEmail] = useState(getEmail)
    const [email , setEmail] = useState("")
  
    // const [email , setEmail] = useState(userLogin.LoginOrNot.email)
    const [password , setPassword] = useState("");
    // const [password , setPassword] = useState(getPassword);

    // console.log(email , password);

    // btn click 
    const loginFunc = () => {
        // console.log(`Login with ${email}, ${password}`);

        dispatch(LoginReducer(email,password));

        // userLogin.status == "false"  ? navigate("/login") :  navigate('/home')
        // navigate('/home')

        // if(userLogin == {}){
        //         // window.location.reload();
        //     navigate("/login") 
        // }else if(userLogin.status == false ){
        //     // window.location.reload();
        //     navigate("/login") 
        // }else if(userLogin.status == true ){
        //     navigate("/home") 
        // }

            // navigate("/home") 
        if (userLogin.status == true) {
            navigate("/home") 
        }else{
        
                navigate("/login") 
            }
        
    }


  return (
    <MDBContainer  fluid className='p-4 background-radial-gradient overflow-hidden ' style={{ backgroundImage:`url(${"https://e0.pxfuel.com/wallpapers/204/659/desktop-wallpaper-programmer-code-background-black-code.jpg"})` }}     >

      <MDBRow >


        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: "rgb(51 79 135)"}}>
    
            The best offer <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
          </h1>

          {/* <p className='px-3' style={{color: 'rgb(51 79 135)'}}> */}
          <p className='px-3' style={{color: 'white'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
        

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
        <h2 style={{color: "rgb(51 79 135)"}}  className="my-3 display-3 fw-bold ls-tight"    >Login</h2>

              <MDBRow>
                {/* <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol> */}

                {/* <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol> */}
              </MDBRow>

{/*               <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(e)=>setEmail(e.target.value)}/>
              {/* <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email}/> */}
              {/* <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password}    /> */}
{/*               <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}    /> */}
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'  onChange={(e)=>setPassword(e.target.value)}    />

            

              <MDBBtn className='w-100 mb-4' size='md' onClick={loginFunc}>Login</MDBBtn>

              <div className="text-center">


                <p>or Redirect to -  <NavLink to="/" > Register </NavLink>  </p>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
