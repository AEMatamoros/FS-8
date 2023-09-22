import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 27,
      addres: "Honduras",
    };
    this.cumplio = this.cumplio.bind(this);
    this.pais = this.pais.bind(this);
    this.cumplioYCambioPais = this.cumplioYCambioPais.bind(this);
  }

  cumplio() {
    this.setState({ age: this.state.age + 1 });
  }

  pais() {
    this.setState({ addres: "Colombia y Mexico" });
  }

  cumplioYCambioPais() {
    this.setState({ addres: "Colombia y Mexico", age: this.state.age + 1 });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("this.render");

    return (
      <>
        <h1>Bienvenido usuario {this.props.name}</h1>
        <h3>Vive en {this.state.addres}</h3>
        <p>Su edad es {this.state.age}</p>
        <button
          onClick={(evt) => {
            console.log(evt);
            this.cumplio();
          }}
        >
          Cumplio Años
        </button>
        <button
          onClick={(evt) => {
            console.log(evt);
            this.pais();
          }}
        >
          Cambiar Pais
        </button>
        <button onClick={this.cumplioYCambioPais}>
          Cambiar Pais y Aumentar edad
        </button>
        <button
          onClick={() => {
            this.pais();
            this.cumplio();
          }}
        >
          Cambiar Pais y Aumentar edad Con Callback
        </button>
      </>
    );
  }
}
