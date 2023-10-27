import React, { Component } from "react";

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="searchInput" className="form-label">
            Ingresa tu busqueda
          </label>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            name="searchInput"
            aria-describedby="searchInputHelp"
            value={this.props.searchInput}
            onChange={this.props.handleInput}
          />

          <div id="handleInputHelp" className="form-text">
            Puedes buscar los elementos que te gusten
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            this.props.setLastSearch();
            this.props.fetchData();
          }}
        >
          Buscar
        </button>
      </form>
    );
  }
}
