import React from "react";
import "../assets/css/blogpage.scss";
import NavBar from "./Nav";

const Blog: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="blogstyings">
        <article className="cards">
          <img
            className="card__background"
            src="https://i.imgur.com/QYWAcXk.jpeg"
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">Colombia</h2>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
            <button className="card__button">Read more</button>
          </div>
        </article>
      </div>
    </>
  );
};

export default Blog;
