import { useEffect } from "react";
import styled from "styled-components";
import "./App.css";

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  /* The resulting background color will be based on the bg props. */
  color: white;
  cursor: pointer;
  background-color: ${(props) => (props.bg === "red" ? "red" : "blue")};
  &:hover {
    background-color: black;
  }
`;

function App() {
  useEffect(() => {
    const API_URL = `api.giphy.com/v1/gifs/search`;
    const api_key = "tJAUA0XIOQTiqleeD4YyXN4NczFolhVp";
    let query = encodeURI("Dragon Ball Z");
    let limit = 10;

    let petition = fetch(
      `https://${API_URL}?api_key=${api_key}&q=${query}&limit=${limit}`
    );

    petition
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("Se ejecuta al final");
      });
  }, []);

  return (
    <main>
      <section>
        <form className="form">
          <input type="text" />
          <StyledButton bg="red">Buscar</StyledButton>
          <button>Buscar</button>
        </form>
        <div className="gallery">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((res) => (
            <img
              src="https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=1f837c38eyi0virzldflr5s1qlzzex8sano7ggx5wy5jls6e&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt=""
              className="gallery-item"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
