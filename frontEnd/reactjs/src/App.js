import './App.css';
import Chatbot from './component/Chatbot';
import Home from './Pages/Home';
import Shop from './Pages/Shop'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
              <Route index path="/" element={<Home />}/>
              <Route path="/shop"  element={<Shop/>}/>  
        </Routes>
      </BrowserRouter>
      <Chatbot/>
    </div>
  );
}

export default App;
