import './Navbar.css';
import image from '../img/articles/ent1.jpg';
import image1 from '../img/articles/ent2.jpg';
import image2 from '../img/articles/sports1.jpg';
import image3 from '../img/articles/tech1.jpg';
import image4 from '../img/articles/tech2.jpg';
function Article(){

    return(
        <>
        <section id="home-articles" className="py-2">
    <div className="container">
        <h2>Editor Picks</h2>
        <div className="articles-container">
          <article className="card">
            <img src={image} alt="" />
            <div>
              <div className="category category-ent">Entertainment</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
          </article>
          <article className="card bg-dark">
            <div className="category category-sports">Sports</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
          </article>
          <article className="card">
            <img src={image3} alt="" />
            <div className="category category-tech">Technology</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
          </article>
          <article className="card">
            <div className="category category-sports">Sports</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            <img src={image2} alt="" />
          </article>
          <article className="card">
            <img src={image4} alt="" />
            <div className="category category-tech">Technology</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
          </article>
          <article className="card bg-primary">
            <div className="category category-sports">Sports</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
          </article>
          <article className="card">
            <div>
              <div className="category category-ent">Entertainment</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
            <img src={image1} alt="" />
          </article>
        </div>
    </div>
  </section>
 </>
    );
}
export default Article;