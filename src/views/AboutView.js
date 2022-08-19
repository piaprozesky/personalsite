import React from "react";
import "./AboutView.css";

function AboutView() {
  return (
    <div id="about">
      <div className="aboutview">
        <h1>About Me</h1>
        <p className="text">
          Full stack developer moving into the tech world after completing a
          Bootcamp at CodeOp.
          <br />
          <br />
          I explored coding independently throughout high school, as well as
          building/contributing to websites created with Wix, WordPress and
          Shopify. From then I knew that this was what I wanted to do so after
          graduating from school I completed a Bootcamp.
          <br />
          <br />
          During this Bootcamp, my love for coding grew along with my curiosity
          and my excitement to create. I worked on three full stack apps, the
          first one, my MVP, I created from scratch. The purpose is to connect
          companies looking for interns with interns.
          <br />
          <br />
          The second one was the feature extension that was built on top of a
          legacy project, for this one I focused on authentication and
          authorisation and adapting the database to make it appropriate for
          this feature.
          <br />
          <br />
          The final project was the group project. Together we created an app
          that helps big groups plan trips together. I focused on the chat and a
          voting system that operated within the chat, editing profile
          information, as well as the overall functionality and styling of the
          app.
          <br />
          <br />
          I’m looking to work in a team where I can contribute to the mission
          and learn from other members as I grow into a full stack developer.
        </p>
      </div>
    </div>
  );
}

export default AboutView;
