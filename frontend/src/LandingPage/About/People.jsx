import React from "react";

function People() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <div className="row text-center pb-5">
        <h2 className="fs-4">People</h2>
      </div>
      <div className="row">
        <div className="col-5">
          <img
            src="Media/image/selfImg1.jpg"
            alt="image"
            style={{
              width: "57%",
              borderRadius: "50%",
              marginLeft: "40%",
            }}
          />
          <h5
            style={{
              marginLeft: "56%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Hitesh Pandey
          </h5>
          <p style={{ marginLeft: "64%" }}>Student</p>
        </div>
        <div
          className="col"
          style={{
            paddingLeft: "3rem",
            paddingRight: "13rem",
            lineHeight: "1.8rem",
            fontSize: "1.05rem",
          }}
        >
          <p>
            Hitesh is a creative soul who loves to express himself through
            painting. Whether it's bold strokes or subtle shades, he finds joy
            in bringing ideas to life on canvas
          </p>
          <p>
            He's currently learning the MERN stack, diving into the world of
            full-stack web development with curiosity and determination.
            Building apps and exploring new technologies keeps him motivated and
            excited.
          </p>
          <p>
            Music is his constant companion — whether he's coding, painting, or
            relaxing, there's always a tune playing in the background that fuels
            his mood and creativity.
          </p>
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="/">
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Instagram
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/hitesh-pandey2005"
              style={{ textDecoration: "none" }}
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;
