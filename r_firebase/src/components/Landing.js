import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import About from "./About";
import Contact from "./Contact";
import Article from "./Article";
import TableofEvents from "./TableofEvents";

const Landing = () => (
  <>
    <Jumbotron fluid className="cover-image">
      <Container>
        <h1 className="display-3 text-center text-uppercase title-letter">
          Parent Harbor
        </h1>
        <p className="lead text-center">
          A safe place for you and your kids to learn, play and find new friends
          together.
        </p>
      </Container>
    </Jumbotron>
    <About />
    <Article />
    <TableofEvents />
    <div className="row" id="media">
      <div className="col-5 follow">
        <h5>Follow Us</h5>
      </div>
      <div className="col-1 twitter" style={{ maxWidth: "66px" }}>
        <a href="#" target="_blank"></a>
      </div>
      <div className="col-1  facebook" style={{ maxWidth: "66px" }}>
        <a href="#" target="_blank"></a>
      </div>
      <div className="col-1 instagram" style={{ maxWidth: "66px" }}>
        <a href="#" target="_blank"></a>
      </div>
    </div>
  </>
);

export default Landing;
