import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { pixabyAPI } from "../../api";

export default class ImageFinder extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    query: "",
  };

  fetchDataFromApi = () => {
    const { images, page, query } = this.state;
    this.setState({ isLoading: true });
    pixabyAPI
      .fetchImage(page, query)
      .then(({ data: { hits } }) => {
        this.setState({
          images: [...images, ...hits],
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, isLoading } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({
        isLoading: true,
      });
      this.fetchDataFromApi();
    }
    if (prevState.isLoading && !isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value;
    this.setState((prevState) => {
      if (prevState.query !== query) {
        return {
          images: [],
          page: 1,
          query: query,
        };
      } else {
        return {
          page: prevState.page + 1,
        };
      }
    });
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
    console.log(this.state);
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {isLoading && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {images.length !== 0 && (
          <button disabled={isLoading} onClick={this.handleLoadMore}>
            load more
          </button>
        )}
      </>
    );
  }
}
