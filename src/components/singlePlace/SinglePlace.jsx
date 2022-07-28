import React from "react";

import place1 from "../../assets/paris.jpg";
import { FaMedal } from "react-icons/fa";

const SinglePlace = ({ places }) => {
  return (
    <>
      <div className="row">
        {places.data.map((place, index) => {
          return (
            <div className="col-sm-4 col-xs-12" key={index}>
              <div className="card mb-4 shadow">
                <img
                  className="card-img-top"
                  src={place.photo ? place.photo.images.large.url : place1}
                  alt="Card  cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{place.name}</h5>
                  {place.ranking_position && (
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "-4px",
                      }}
                      className=" font-10"
                    >
                      {" "}
                      {place.rating} rating
                    </p>
                  )}{" "}
                  <p
                    style={{
                      fontWeight: "lighter",
                      fontSize: "20px",
                      marginTop: "-4px",
                    }}
                    className=" font-10"
                  >
                    {place.location_string} <br />
                    {place?.phone}
                  </p>
                  {place.ranking_position && (
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "-4px",
                      }}
                      className=" font-10"
                    >
                      {" "}
                      Ranked {place.ranking_position}{" "}
                    </p>
                  )}{" "}
                  <br />
                  <p
                    style={{
                      fontWeight: "lighter",
                      fontSize: "20px",
                      marginTop: "-4px",
                    }}
                    className=" font-10"
                  >
                    {place.ranking}
                  </p>
                  <p
                    style={{
                      fontWeight: "lighter",
                      fontSize: "20px",
                      marginTop: "-4px",
                    }}
                    className=" font-12"
                  >
                    {place?.awards?.map((award, i) => (
                      <>
                        <span className="font-14 light" key={i}>
                          <FaMedal
                            className="brown"
                            style={{ marginRight: "5px" }}
                          />
                          {award.display_name}
                        </span>{" "}
                        <br />
                      </>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SinglePlace;
