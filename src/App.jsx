
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { AppProvider } from './Components/AppContext';
import About from './About';
import ManageUser  from './Components/ManageUser';
import MusicUpload from './Components/MusicUpload';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='about' element={<About />} />
            <Route path='manageuser' element={<ManageUser />} />
            <Route path='musicupload' element={<MusicUpload />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
