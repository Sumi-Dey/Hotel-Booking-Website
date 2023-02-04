import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import Home from './pages/home/Home';
import Hotels from './pages/hotels/Hotels';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel' element={<List />} />
        <Route path='/hotel/:id' element={<Hotels />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />   
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
