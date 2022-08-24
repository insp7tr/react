export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.REACT_APP_X_RapidAPI_Host,
  },
};

export const GEO_API_URL = `https://${process.env.REACT_APP_X_RapidAPI_Host}/v1/geo`;

export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5`;
