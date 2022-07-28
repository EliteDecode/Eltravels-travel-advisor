import axios from "axios";

const URL_CITY = "https://spott.p.rapidapi.com/places?";

const URL_ADVISOR =
  "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng";

export const getCity = async (city) => {
  try {
    const { data } = await axios.get(URL_CITY, {
      method: "GET",

      params: {
        type: "CITY",
        limit: "10",
        q: city,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_API_KEY_ELTRAVELS,
        "X-RapidAPI-Host": "spott.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const getAdvisor = async (lat, lng, type) => {
  try {
    const { data } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        method: "GET",
        params: {
          latitude: lat,
          longitude: lng,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_API_KEY_ELTRAVELS,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log({ error });
  }
};
