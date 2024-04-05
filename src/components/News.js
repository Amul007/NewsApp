import React, { useState, useEffect } from 'react';
import NewItems from './NewItems';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c69feb27cd2947058e6e72285ca84cac&page=${page}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    };
    fetchArticles();
  }, [page]);

  const clickPrev = async () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const clickNext = async () => {
    if (page + 1 <= Math.ceil(totalResults / 20)) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h2>NewsApp</h2>
      <div className="row">
        {articles.map((element) => (
          <div className="col-md-3" key={element.url}>
            <NewItems
              title={element.title ? element.title.slice(0, 45) : ''}
              description={element.description ? element.description.slice(0, 88) : ''}
              imageUrl={element.urlToImage}
              url={element.url}
            />
          </div>
        ))}
      </div>
      <div className="container my-3 d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={clickPrev}>
          &laquo; Previous
        </button>
        <button disabled={page >= Math.ceil(totalResults / 20)} className="btn btn-dark" onClick={clickNext}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default News;
