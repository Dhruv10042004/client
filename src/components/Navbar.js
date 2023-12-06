import './Navbar.css';
import image from '../img/logo.png';
import {Link} from 'react-router-dom';

function Navbar(){
 return(
  <>
  <nav id="main-nav">
    <div className="container">
      <div><img src={image} alt="NewsGrid" className="logo" /></div>
      <div>
      <ul>
        <li><Link to='/' className='current'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
      </ul>
      </div>
    </div>
  </nav>
  </>
 );
}
export default Navbar;