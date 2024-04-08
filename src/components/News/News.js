import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import { endpointPath } from "../../config/api";
import { Container, Header } from "./index";

function News(props) {
  const { newscategory, country } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get(endpointPath(country, newscategory));
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [country, newscategory]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>{header(capitaLize(newscategory))}</Header>
          <Container>
            <Row>
              {articles.map((article) => (
                <Col key={uuidv4()} sm={12} md={6} lg={4} xl={3}>
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    published={article.publishedAt}
                    channel={article.source.name}
                    alt="News image"
                    publishedAt={article.publishedAt}
                    imageUrl={article.image}
                    urlNews={article.url}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

News.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

News.defaultProps = {
  country: "us",
  newscategory: "general",
};

export default News;
