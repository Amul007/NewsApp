import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("hello i am  a constructor");
    this.state={
        articles : [],
        loading : false
    }
  }

  async componentDidMount(){
     let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c69feb27cd2947058e6e72285ca84cac&page=1";
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({articles : parsedData.articles});
  }

  clickPev =() =>{
    console.log('prev')
  }
  clickNext =() =>{
    console.log('Next')
  }
  
  render() {
    return (
    <div className="container my-3">
        <h2>newsMonkey - best news</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url} >
              <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl = {element.urlToImage} url ={element.url}/>
         </div> 
     })}
     </div> 
     <div className="continer my-3 d-flex justify-content-between">
     <button disabled = "true" type="button" className="btn btn-dark" onClick={this.clickPev}>&laquo; Previous</button>
     <button type="button" className="btn btn-dark" onClick={this.clickNext}>Next &raquo;</button>
     </div>      
    </div>    
    )
  }
}

export default News