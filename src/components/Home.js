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

import React, { useState } from 'react';
import Project from './project';
import avatarImage from "./assets/avatar.png";
    
      <div className="d-flex justify-content-center">
        <img src={avatarImage} width={300} alt="cartoon profile" className="m-5 border-pink" />
      </div>

      
const Home = () => {
    const [project] = useState([
        {
            title: 'Ment-Chip',
            github: '',
            link: '',
            content: '.',
            // image: Ment-Chip,
        },
            {
                title: 'FoodWillBeerUsApart',
                github: '',
                link: '',
                content: '',
                // image: FoodWillBeerUsApart,
            },
            {
                title: "Inventory Management",
                github: '',
                link: '',
                content: '',
                // image: Inventory Management,
            },
            {
                title: 'NoSQL-Social-Network-API',
                github: '',
                link: '',
                content: '',
                // image: NoSQLAPIscreenshot,
            },
            {
                title: 'Ecommerce-Back-End',
                github: '',
                link: '',
                content: '',
                // image: ORMAPI,
            },
            {
                title: 'Express-Note-Taker',
                github: '',
                link: '',
                content: '',
                // image: ExpressNoteTaker,
            },
            {
                title: 'OOP-SVG-Logo-Maker',
                github: '',
                link: '',
                content: '',
                // image: SVGLogoGen,
            },
        ]);
        return (
          <section class="flex flex-row justify-center">
             {/*  <h2 class="justify">Portfolio</h2> */}
              <div class="flex flex-col">
                  {project.map((project, index) => (
                      <Project key={index} project={project} />
                  ))}
              </div>
          </section>
      )
  }

export default Home;