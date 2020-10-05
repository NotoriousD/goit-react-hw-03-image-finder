import React, { Component } from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { Modal } from "../Modal";
import "./ImageGallery.scss";

class ImageGallery extends Component {
  state = {
    isModal: false,
    imgSrc: "",
  };

  openModal = (e) => {
    const largeImageURL = e.currentTarget.dataset.src;
    this.setState({ imgSrc: largeImageURL, isModal: true });
  };

  closeModal = (e) => {
    if (e.currentTarget === e.target) {
      this.setState({ isModal: false });
    }
  };
  render() {
    const { isModal, imgSrc } = this.state;
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            {...image}
            onClick={this.openModal}
          />
        ))}
        {isModal && (
          <Modal src={imgSrc} alt={images.tags} onClick={this.closeModal} />
        )}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
    })
  ),
};

export default ImageGallery;
