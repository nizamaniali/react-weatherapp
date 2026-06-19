import React, { useEffect, useState } from 'react';

const FetchWeather = () => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const url = `https:api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  if (!data.main) {
    return <h1>Loading...</h1>;
  }

  const { main, name } = data;
  const { temp, feels_like } = main;

  return (
    <div>
      <section>
        <h2>City: {name}</h2>
        <h4>Temperature:{temp}</h4>
        <h5>Feels Like: {feels_like}</h5>
      </section>
    </div>
  );
};

export default FetchWeather;
