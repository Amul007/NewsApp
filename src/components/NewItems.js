import React, { Component } from 'react'
import  './NewItems.css'

export class NewItems extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
        <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={imageUrl} alt="" />
            </figure>
            <div class="article-body">
              <h2>{title}</h2>
              <p>{description}</p>
              <a href={url} class="read-more">
                Read more <span class="sr-only">about this is some title</span>
              </a>
            </div>
          </div>
        </article>
      </section>
    )
  }
}

export default NewItems
