
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Home from './Components/Home';
import { useSelector } from 'react-redux';

function App() {

  const {userLogin} = useSelector(state=>  state.UserDetails);;
  console.log(userLogin)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {userLogin.status &&  <Route path="/home" element={<Home />} />  }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
