import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Services from './Components/Services/services';
import Review from './Components/Review/Review';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
