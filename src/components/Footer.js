import './Navbar.css';
import {Link} from 'react-router-dom';
function footer(){

    return (
        <>
        <footer id="main-footer" className="py-2">
    <div className="container footer-container">
      <div>
        <img src="img/logo_light.png" alt="NewsGrid" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum vitae.</p>
      </div>
      <div>
        <h3>Email Newsletter</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form>
          <input type="email" placeholder="Enter Email..." id="email" required />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>
      <div>
        <h3>Site Links</h3>
        <ul className="list">
          <li><a href="help.html">Help & Support</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="article.html">About Us</a></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </div>
      <div>
        <h2>Join Our Club</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nesciunt!</p>
        <a href="#" className="btn btn-secondary">Join Now</a>
      </div>
      <div>
        <p>
          Copyright &copy; 2019, All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
        </>
    );
}
export default footer;