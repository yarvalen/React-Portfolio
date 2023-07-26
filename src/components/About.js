import React from "react";
import avatarImage from "./assets/avatar.png";

const About = () => {

  return (
    <div>
      <div>
        <h1>Welcome to my Professional Portfolio</h1>
        <p>
          Hello, my name is Janella. I am thrilled to have you here, exploring my work and accomplishments. This platform serves as a window into my professional journey in the
          Georgia Tech Full Stack Bootcamp. Here, you can see how my skills, knowledge, and achievements have grown.
        </p>
        <div className="d-flex justify-content-center">
          <img src={avatarImage} width={300} alt="cartoon profile" className="m-5 border-pink" />
        </div>
      </div>
      {/* <h1>About Page</h1> */}
    </div>
  );
};
export default About;
