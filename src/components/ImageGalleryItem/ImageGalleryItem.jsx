import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.scss";

const ImageGalleryItem = ({ id, webformatURL, onClick, largeImageURL }) => {
  return (
    <li
      key={id}
      data-src={largeImageURL}
      onClick={onClick}
      className="ImageGalleryItem"
    >
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
