
import './App.css';
import Login from '../src/components/Login';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home';



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
