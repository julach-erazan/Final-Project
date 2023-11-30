import './App.css';
import Chatbot from './component/Chatbot';
import Home from './Pages/Home';
import Shop from './Pages/Shop'
import Readmore from './Pages/Readmore';
import {BrowserRouter as Router, Routes, Route, BrowserRouter,} from "react-router-dom";
import Pest from './Pages/Pest';

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
              <Route index path="/" element={<Home />}/>
              <Route path="/shop"  element={<Shop/>}/>
              <Route path="/readmore/:productName"  element={<Readmore/>}/>
              <Route path="/pest/:pestName"  element={<Pest/>}/>
        </Routes>
      </BrowserRouter>
      <Chatbot/>
    </div>
  );
}

export default App;
