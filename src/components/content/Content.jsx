import React, { useState } from "react";
import SinglePlace from "../singlePlace/SinglePlace";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiWorld } from "react-icons/gi";
import "./content.css";
import { useGlobalContext } from "../../context";
import Loader from "../loader/Loader";
const Content = () => {
  const { places, type, setType, loading } = useGlobalContext();

  if (loading) {
    return (
      <section className="places py-5 ">
        <div className="container text-center">
          <p className="font-33 dark light text-center">
            Amazing Restuarants and Hotels Around You{" "}
            <GiWorld className="font-33 brown" style={{ marginTop: "-5px" }} />
          </p>
          <div className="place-control mb-4">
            <form>
              <select
                name=""
                id=""
                className="select  brown mt-2 "
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </form>
          </div>
          <div className="mt-5">
            <div className="text-center mt-5" style={{ alignItemsc: "center" }}>
              <Loader />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="places py-5 ">
      <div className="container">
        <p className="font-33 dark light text-center">
          Amazing Restuarants and Hotels Around You{" "}
          <GiWorld className="font-33 brown" style={{ marginTop: "-5px" }} />
        </p>
        <div className="place-control mb-4">
          <form>
            <select
              name=""
              id=""
              className="select  brown mt-2 "
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </form>
        </div>
        <div className="mt-5">
          {places.length !== 0 ? (
            <SinglePlace places={places} />
          ) : (
            <div className="text-center mt-5" style={{ alignItemsc: "center" }}>
              <h4>No City Rendered</h4>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
