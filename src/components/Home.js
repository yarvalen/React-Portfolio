// import React from 'react';

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to my Professional Portfolio</h1>
//       <p>
//       Hello my name is Janella. 
//       I am thrilled to have you here, exploring my work and accomplishments. This platform serves as a window into my professional journey in Georgia Tech full stack bootcamp. Here you can see how my skills, knowlegde, and achievements have grown. 
//       </p>
//     </div>
     
     
//      <div>
//   <img src="/assets/images/avatar-pic.png" alt="picture of Janella" className="center" style={{ height: "400px", width: "300px" }} />
// </div>

//   );
//   }

// import React from 'react';
// import ImgAvatar from "./assets/avatar-pic.png";

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to my Professional Portfolio</h1>
//       <p>
//         Hello, my name is Janella. I am thrilled to have you here, exploring my work and accomplishments. This platform serves as a window into my professional journey in the Georgia Tech Full Stack Bootcamp. Here, you can see how my skills, knowledge, and achievements have grown.
//       </p>
     
//       <div className="d-flex justify-content-center">
//                     <img src={ImgAvatar} width={300} alt="my facial profile" className="m-5 border-pink" />
//                 </div>
//     </div>
//   );
// }

import React from 'react';
import avatarImage from "./assets/avatar.png";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Professional Portfolio</h1>
      <p>
        Hello, my name is Janella. I am thrilled to have you here, exploring my work and accomplishments. This platform serves as a window into my professional journey in the Georgia Tech Full Stack Bootcamp. Here, you can see how my skills, knowledge, and achievements have grown.
      </p>
     
      <div className="d-flex justify-content-center">
        <img src={avatarImage} width={300} alt="cartoon profile" className="m-5 border-pink" />
      </div>
    </div>
  );
}
export default Home;