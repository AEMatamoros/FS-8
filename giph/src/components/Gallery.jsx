import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <div className="gallery">
          {!!this.props.gyphs &&
            this.props.gyphs.length > 0 &&
            this.props.gyphs.map((giph, index) => (
              <div className="card" style={{ width: "18rem" }} key={index}>
                <img
                  src={`${giph.images.original.url}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{giph.title}</h5>
                  <p className="card-text">{giph.username}</p>
                  <a href={`${giph.url}`} className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
}

Gallery.propTypes = {
  name: PropTypes.string,
};
