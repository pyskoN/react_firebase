import React from "react";

const About = () => (
  <div style={{ minHeight: "73vh", marginTop: "1.2em" }}>
    <div
      className="row mr-6 ml-6"
      style={{ justifyContent: "center", fontStyle: "italic" }}
    >
      <h3 className="h1 mt-4 ">About Us</h3>
    </div>
    <div className="row mr-5 ml-5 mt-5">
      <div className="col-sm-12 col-md-6">
        <div className="embed-responsive embed-responsive-16by9 mt-4">
          <iframe
            width="540"
            height="300"
            src="https://www.youtube.com/embed/GN6Fp_4xpss"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 about" id="about">
        <p>
          <span className="first-letter">W</span>e are happy that you have
          decided to visit our website. We are parents ourselves. We know how
          hard it is to aclimatize in a new town. New country. New countinent.
          We know the hardships because we all have been there. But we made it
          because we had each other! And now we want you to know that you are
          not alone. In 2019 around 12 young families with small kids decided
          that they are going to help one another and support. We have created a
          small group, where we shared, opened up and grew together as parents.
        </p>
      </div>
    </div>
  </div>
);

export default About;
