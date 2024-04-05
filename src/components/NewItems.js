import React from 'react';
import './NewItems.css';

const NewItems = ({ title, description, imageUrl, url }) => {
  return (
    <section className="articles">
      <article>
        <div className="article-wrapper">
          <figure>
            <img src={imageUrl} alt="" />
          </figure>
          <div className="article-body">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={url} className="read-more">
              Read more <span className="sr-only">about this is some title</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default NewItems;
