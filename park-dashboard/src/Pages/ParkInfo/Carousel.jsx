import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

function PhotoCarousel(props) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://developer.nps.gov/api/v1/parks?API_Key=OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7&parkCode=${props.parkCode}`
      );
      setImages(response.data.data[0].images);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const imageCarousel = images.map((image) => {
    return (
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={image.url}
          alt={image.altText}
          style={{ objectFit: "cover", height: "50vh" }}
        />
        <Carousel.Caption>
          <h2 className="legend">{image.title}</h2>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return <Carousel>{imageCarousel}</Carousel>;
}

export default PhotoCarousel;
