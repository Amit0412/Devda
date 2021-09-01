import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Amit Pandharikar</p>
          <p>Engineering Student.</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src="https://miro.medium.com/fit/c/1360/1360/0*uqbAOI1MiDYDF5ir"
          //src={`${process.env.PUBLIC_URL}/mo-logo.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
