import './App.css';
import Nav from './component/Nav';
import Chatbot from './component/Chatbot';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Service from './Pages/Service';

function App() {
  return (
    <div>
      <Nav/>
      <Chatbot/>
      <Home/>
      <About/>
      <Shop/>
      <Service/>
    </div>
  );
}

export default App;
