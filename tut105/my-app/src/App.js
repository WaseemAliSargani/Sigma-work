import './App.css';
import logo from './logo.svg';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setvalue] = useState(0)
  return (
    <div className="App">
      <Navbar logotext="WaseemAli Pic"/>
     <div className="value"> {value}</div>
     <button className='minus' onClick={()=>{setvalue(value - 1)}}> -</button>
     <button className='plus' onClick={()=>{setvalue(value + 1)}}> +</button>
     <Footer/>
    </div>
  );
}

export default App;
