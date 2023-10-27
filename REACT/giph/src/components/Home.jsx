import React, { Component } from "react";
import Loader from "./Loader";
import Gallery from "./Gallery";
import Error from "./Error";
import SearchComponent from "./SearchComponent";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gyphs: [],
      loading: false,
      error: false,
      searchInput: "life",
      lastSearch: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.setLastSearch = this.setLastSearch.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  handleInput(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  setLastSearch() {
    this.setState({ lastSearch: this.state.searchInput });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  fetchData() {
    const API_URL = `api.giphy.com/v1/gifs/search`;
    const api_key = "tJAUA0XIOQTiqleeD4YyXN4NczFolhVp";
    let query = encodeURI(this.state.searchInput);
    let limit = 10;

    let petition = fetch(
      `https://${API_URL}?api_key=${api_key}&q=${query}&limit=${limit}`
    );
    this.setState({ loading: true });
    petition
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ gyphs: responseData.data });
      })
      .catch((err) => this.setState({ error: err }))
      .finally(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <section>
        <SearchComponent
          searchInput={this.state.searchInput}
          setLastSearch={this.setLastSearch}
          handleInput={this.handleInput}
          fetchData={this.fetchData}
        />
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            {!!this.state.error ? (
              <Error />
            ) : (
              <Gallery
                gyphs={this.state.gyphs}
                name={
                  !!this.state.lastSearch
                    ? `Galleria de ${this.state.lastSearch}`
                    : " "
                }
              />
            )}
          </>
        )}
      </section>
    );
  }
}
