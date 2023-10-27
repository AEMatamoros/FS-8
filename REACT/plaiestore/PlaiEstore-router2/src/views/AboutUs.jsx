import React from "react";
import About from "./About";

export default function AboutUs() {
  return (
    <div className="container">
      <h1>Sobre Nosotros</h1>
      <div className="row">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <p class="text-start">Start aligned text on all viewport sizes.</p>
        <p class="text-center">Center aligned text on all viewport sizes.</p>
        <p class="text-end">End aligned text on all viewport sizes.</p>

        <p class="text-sm-end">
          End aligned text on viewports sized SM (small) or wider.
        </p>
        <p class="text-md-end">
          End aligned text on viewports sized MD (medium) or wider.
        </p>
        <p class="text-lg-end">
          End aligned text on viewports sized LG (large) or wider.
        </p>
        <p class="text-xl-end">
          End aligned text on viewports sized XL (extra large) or wider.
        </p>
        <p class="text-xxl-end">
          End aligned text on viewports sized XXL (extra extra large) or wider.
        </p>
      </div>
    </div>
  );
}
