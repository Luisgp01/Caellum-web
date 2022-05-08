import { Route, 
  Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './guards/ProtectedRoute';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';


function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
         
        <Route path="/" element={<ProtectedRoute />} >
            <Route path='/profile' element={<Profile />}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;