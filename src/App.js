import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import { BrowserRouter,Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
       <Route path='/About' element={<About />} />
       <Route path='/Contact' element={<Contact />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  );
}
export default App;
