import React, { useState, useEffect, useContext } from "react";

import { getCity, getAdvisor, getWeather } from "./apis/Api";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [coords, setCoords] = useState({});
  const [type, setType] = useState("hotels");

  const [city, setCity] = useState("abuja");

  const [places, setPlaces] = useState([]);

  const [loading, setLoading] = useState(true);

  /* Setting the coordinates to a default value. */
  useEffect(() => {
    setCoords({ lat: 9.072264, lng: 7.491302 });

    // navigator.geolocation.getCurrentPosition(
    //   ({ coords: { latitude, longitude } }) => {
    //     setCoords({ lat: latitude, lng: longitude });
    //   }
    // );
  }, []);

  /* Getting the city from the api and setting the coordinates. */
  useEffect(() => {
    getCity(city).then((data) => {
      const latitude = data[0].coordinates.latitude;
      const longitude = data[0].coordinates.longitude;
      setCoords({ lat: latitude, lng: longitude });
    });
  }, [city]);

  /* A useEffect hook that is used to fetch data from the api. */
  useEffect(() => {
    setLoading(true);
    getAdvisor(coords.lat, coords.lng, type).then((data) => {
      setLoading(false);
      setPlaces(data);
    });
  }, [coords, type]);

  return (
    <AppContext.Provider
      value={{
        setCity,
        city,
        loading,
        places,
        type,
        setType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
