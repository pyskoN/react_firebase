import React from "react";

const Article = () => (
  <div style={{ minHeight: "76vh", marginTop: "3em" }}>
    <div className="container mt-5">
      <div className="row">
        <Articles />
        <Past_Events />
      </div>
    </div>
  </div>
);

const Past_Events = () => (
  <div
    className="col-md-6 col-sm-12 col-lg-6"
    style={{ textAlign: "center" }}
    id="events"
  >
    <a href="#" alt="events" className="h1 text-reset mb-4">
      Past events
    </a>
    <div className="row  articleImg2 mr-auto ml-auto ">
      <img className="mb-4 my-3 img-fluid" />
    </div>
    <h5>Family Fest</h5>
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit involuptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <a
      href="https://lemonlimeadventures.com/20-ways-to-spend-quality-time-with-kids/"
      type="button"
      className="btn btn-outline-secondary"
    >
      Continue reading..
    </a>
  </div>
);

const Articles = () => (
  <div
    className="col-md-6 col-sm-12 col-lg-6"
    style={{ textAlign: "center" }}
    id="articles"
  >
    <a href="#" alt="articles" className="h1 text-reset mb-4">
      Articles
    </a>
    <div className="row articleImg1 mr-auto ml-auto ">
      <img className="img-fluid " />
    </div>

    <h5>Quality time with kids</h5>
    <p className="paragraph">
      One of the love languages discussed in the
      <em>Love Languages Books </em>is Quality Time. Let’s talk about ways you
      can speak that love language to a child. Some of these might be perfect
      for you, while others may not be a good fit. Read through and see which
      ones you can make work!
    </p>
    <a
      href="https://lemonlimeadventures.com/20-ways-to-spend-quality-time-with-kids/"
      type="button"
      className="btn btn-outline-secondary"
    >
      Continue reading..
    </a>
  </div>
);
export default Article;
