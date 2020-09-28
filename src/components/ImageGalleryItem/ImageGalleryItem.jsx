import React from "react";
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

export default ImageGalleryItem;
