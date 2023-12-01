import { Button } from "react-bootstrap";
import styled from "styled-components";
import UncontrolledExample from "./Carrousel";

const CustomButton = styled(Button)`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default function App() {
  return (
    <>
      <ul className="nav justify-content-center bg-black text-white">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
      <UncontrolledExample></UncontrolledExample>
      <CustomButton>Texto del botom</CustomButton>
    </>
  );
}
