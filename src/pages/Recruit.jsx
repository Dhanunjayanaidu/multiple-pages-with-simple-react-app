import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

function Recruit() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: "150px 50px" }}>
        <h1>Recruit content will be here</h1>
        <p>
          some paragraph will be here Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <p>
          <Link to="/">Home</Link> <Link to="/blog">Blog</Link>{" "}
          <Link to="/contact">Contact Us</Link>{" "}
          <Link to="/education">Education</Link> <Link to="/faqs">Faqs</Link>{" "}
          <Link to="/podcasts">Podcasts</Link>{" "}
          <Link to="/recruits">Recruits</Link>{" "}
        </p>
      </div>
    </>
  );
}

export default Recruit;
