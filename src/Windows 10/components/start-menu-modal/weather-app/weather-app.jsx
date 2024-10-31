import { useContext, useEffect, useState } from "react";
import WeatherCard from "./weather-card";
import { IoSearch } from "react-icons/io5";
import LoadingRing from "../../custom hooks/laoding-ring";
import NavigationButton from "../../custom hooks/navigations-buttons";
import useFetchApi from "../../custom hooks/useFetch";
import { WindowsContext } from "../../../context.jsx/context";

export default function WeatherApp() {
  const [theme, setTheme] = useState("light");
  const API_KEY = "97886286f5a4377a411388811e8c1d09";
  const { setCityName, cityName, setStartWeatherApp } =
    useContext(WindowsContext);
  const [loading, error, data, fetchData] = useFetchApi(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
    {}
  );

  return (
    <div
      className={theme === "dark" ? "weather__app darkmode" : "weather__app"}
    >
      {loading && <LoadingRing />}

      <div className="head__sec">
        <div className="search__sec">
          <input
            type="text"
            name="cityname"
            placeholder="Type a city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <button onClick={fetchData}>
            <IoSearch className="search__btn" />
          </button>
        </div>
        <button
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          className="theme__switcher"
        >
          <span className={theme === "dark" ? "ball active" : "ball"}></span>
        </button>

        <NavigationButton onClick={() => setStartWeatherApp(false)} />
      </div>

      {data && data.name && <WeatherCard data={data} />}
    </div>
  );
}
