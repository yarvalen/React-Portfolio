import React, { useState } from "react";
import Project from "./project";

const Home = () => {
  const [projects] = useState([
    {
      title: "Ment-Chip",
      github: "",
      link: "",
      content: ".",
      // image: Ment-Chip,
    },
    {
      title: "FoodWillBeerUsApart",
      github: "",
      link: "",
      content: "",
      // image: FoodWillBeerUsApart,
    },
    {
      title: "Inventory Management",
      github: "",
      link: "",
      content: "",
      // image: Inventory Management,
    },
    {
      title: "NoSQL-Social-Network-API",
      github: "",
      link: "",
      content: "",
      // image: NoSQLAPIscreenshot,
    },
    {
      title: "Ecommerce-Back-End",
      github: "",
      link: "",
      content: "",
      // image: ORMAPI,
    },
    {
      title: "Express-Note-Taker",
      github: "",
      link: "",
      content: "",
      // image: ExpressNoteTaker,
    },
    {
      title: "OOP-SVG-Logo-Maker",
      github: "",
      link: "",
      content: "",
      // image: SVGLogoGen,
    },
  ]);

  return (
    <section class="flex flex-row justify-center text-primary">
      <h1>Welcome to My Full Stack Developer Page!</h1>
      <h2>Projects</h2>
      {/*  <h2 class="justify">Portfolio</h2> */}
      <div class="flex flex-col">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Home;
