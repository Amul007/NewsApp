import React, { Component } from 'react';
// import NewItems from './NewItems';
import NewItems from './NewItems';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c69feb27cd2947058e6e72285ca84cac&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  clickPev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c69feb27cd2947058e6e72285ca84cac&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    }
    )
  }

  clickNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {

    }
    else {
     console.log("next has been clicked")
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c69feb27cd2947058e6e72285ca84cac&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      }
      )
    }

  }


  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url} >
              <NewItems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} url={element.url} />
            </div>
          })}
        </div>
        <div className="continer my-3 d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.clickPev}>&laquo; Previous</button>
          <button disbaled={this.state.pg} className="btn btn-dark" onClick={this.clickNext}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News