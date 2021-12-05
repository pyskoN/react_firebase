import React from "react";

const Contact = () => (
  <>
    <div style={{ minHeight: "73vh", marginTop: "1.2em" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 contactComp" id="about">
            <h3 style={{ fontSize: "xxx-large" }}>Contact</h3>
            <p>
              We are very happy that you are here. Should you have any
              questions, suggestions or concerns, please do not hesitate to send
              us an email to <em>parentharbour@gmail.com</em>. We will get beck
              to you as soon as possible.
            </p>
            <p>
              Also, you can find us in our office every Sunday after 10:30am
              Holly Mass at St. Nicholas Cathedral in case you want to meet in
              person ( We definitely do!)
            </p>
            <p>
              For any other upcoming events and news, please sign up to our
              NewsLetter.
            </p>
          </div>
        </div>
      </div>
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
    </div>
  </>
);

export default Contact;
