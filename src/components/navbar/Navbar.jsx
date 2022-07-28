import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiPlanetConquest } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import { useGlobalContext } from "../../context";
import "./navbar.css";

const Navbar = () => {
  const { setCity, city } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = document.getElementById("input").value;
    setCity(city);
  };
  return (
    <section className="nav py-4 ">
      <div className="container py-1">
        <div className="nav-control">
          <div className="logo">
            <h4 className="dark">
              El-Trite Travels
              <GiPlanetConquest
                className="font-33 brown"
                style={{ marginTop: "-10px" }}
              />
            </h4>
          </div>
          <div className="search-box mt-3">
            <form onSubmit={handleSubmit}>
              <div className="form-control input-group">
                <input
                  type="search"
                  id="input"
                  className="form-control inp bold"
                  placeholder="e.g. Paris"
                />
                <button className="btn btn-brown white " type="submit">
                  <BiSearchAlt className="bold font-27" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
