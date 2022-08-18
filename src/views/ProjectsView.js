import React from "react";
import "./ProjectsView.css";

function ProjectsView() {
  return (
    <div className="projectsview">
      <h1>Projects</h1>
      <div className="project">
        <h2>John Recovery Coaching</h2>
        <a href="https://www.johnrecoverycoaching.com">
          https://www.johnrecoverycoaching.com
        </a>
        <p>Technologies Used: Wix</p>
      </div>

      <div className="project">
        <h2>Group Trip Planning App - Group Project</h2>
        <p>
          Full stack app that helps big groups plan trips together, with a focus
          on families. Implemented features: group chat function: enabling
          communication for group members a voting system to help with
          description making displaying profile information with the option to
          edit this information.
        </p>
        <div>
          <a href="https://loom.com/share/folder/67a69e9917314026bbf65f7182cf628f">
            Link to demo
          </a>
        </div>
        <br />
        <div>
          <a href="https://github.com/CodeOp-tech/FS20_Team">
            Link to project on GitHub
          </a>
        </div>
        <p>
          Technologies Used: React.js, Pusher API, Node.js/Express.js, React
          Router, Bootstrap, Postman, Db Designer, MySQL
        </p>
      </div>

      <div className="project">
        <h2>Pet Sitting App - Feature Extension</h2>
        <p>
          Full stack app that connects people looking for accommodation for
          their pets with hosts for pets. Individual contributor to a legacy
          project. Implemented features: User Registration, User Login and
          role-based data visualisation using technologies like: JSON Web Token
          (generating tokens), bcrypt (password hashing).
        </p>
        <div>
          <a href="https://www.loom.com/share/59af83e0381946beb664c1c1abb81479">
            Link to demo
          </a>
        </div>
        <br />
        <div>
          <a href="https://github.com/piaprozesky/petHotel">
            Link to project on GitHub
          </a>
        </div>
        <p>
          Technologies Used: React.js, React Router, Node.js/Express.js,
          Bootstrap, bcrypt, JSON Web Token, Postman, Db Designer, MySQL
        </p>
      </div>

      <div className="project">
        <h2>Internship Opportunities App - MVP</h2>
        <p>
          Full stack app that connects interns with companies hiring interns.
          This was a solo project where I did all the project planning and
          programming. Implemented features: Admin dashboard to enable admins to
          post internship opportunities and accept applications. Open
          applications listing page for students to browse through and apply for
          internships.
        </p>
        <div>
          <a href="https://www.loom.com/share/c876ee780a634f1f9aa68ef103a7c2af">
            Link to demo
          </a>
        </div>
        <br />
        <div>
          <a href="https://github.com/piaprozesky/mvp">
            Link to project on GitHub
          </a>
        </div>
        <p>
          Technologies Used: React.js, React Router, Node.js/Express.js,
          Bootstrap, Postman, Db Designer, MySQL
        </p>
      </div>
    </div>
  );
}

export default ProjectsView;
