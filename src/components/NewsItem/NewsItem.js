import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Details from "./Details/Details";

function NewsItem(props) {
  const { imageUrl, alt, description, title, channel, published, urlNews } = props;

  return (
    <Card className="news-card">
      <Card.Img variant="top" src={imageUrl} alt={alt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Details channel={channel} published={published} />
        <Button href={urlNews} target="_blank" variant="primary" className="read-more-btn">
          Read more →
        </Button>
      </Card.Body>
    </Card>
  );
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  published: PropTypes.string,
  urlNews: PropTypes.string,
};

export default NewsItem;
