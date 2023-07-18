import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from './components/Header';
// import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Resume from './components/pages/Resume';
// import Footer from './components/pages/Footer';
// import './styles/App.css';
// const App = () => <PortfolioContainer />;

function App() {
    return (
      <div>
        <Header/>
        <PortfolioContainer />
        {/* <About /> */}
        {/* <Contact /> */}
        {/* <Resume /> */}
        {/* <Footer className="my-auto"/> */}
      </div>
    );
  }
export default App;



