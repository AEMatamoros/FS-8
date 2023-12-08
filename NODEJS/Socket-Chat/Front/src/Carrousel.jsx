import Carousel from "react-bootstrap/Carousel";
import svg from "./assets/image.jpg";

import styled from "styled-components";

const CustomCarrousel = styled(Carousel)`
  width: 100%;
  height: 50vh;
  background-color: gray;
  overflow: hidden;
`;
function UncontrolledExample() {
  return (
    <CustomCarrousel>
      <CustomCarrousel.Item>
        <img src={svg} alt="" />
        <CustomCarrousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CustomCarrousel.Caption>
      </CustomCarrousel.Item>
      <CustomCarrousel.Item>
        <img src={svg} alt="" />
        <CustomCarrousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CustomCarrousel.Caption>
      </CustomCarrousel.Item>
      <CustomCarrousel.Item>
        <img src={svg} alt="" />
        <CustomCarrousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </CustomCarrousel.Caption>
      </CustomCarrousel.Item>
    </CustomCarrousel>
  );
}

export default UncontrolledExample;
