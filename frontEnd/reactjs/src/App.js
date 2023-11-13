import './App.css';
import Chatbot from './component/Chatbot';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className='overflow-hidden'>
      <Chatbot/>
      <Home/>
      <About/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
