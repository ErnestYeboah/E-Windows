/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useRef, useState } from "react";

export const WindowsContext = createContext();
export default function WindowsGlobalState({ children }) {
  const [weatherSlide, setWeatherSlide] = useState(0);
  const timer = useRef();
  const [showStartMenuPanel, setStartMenuPanel] = useState(false);
  const [startWeatherApp, setStartWeatherApp] = useState(false);
  const [cityName, setCityName] = useState("");
  const [radioBtnClicked, setRadioBtnClicked] = useState("");

  useEffect(() => {
    timer.current = setInterval(() => {
      setWeatherSlide((c) => c + 1);
    }, 5000);

    if (weatherSlide > 2) {
      setWeatherSlide(0);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [weatherSlide]);

  return (
    <WindowsContext.Provider
      value={{
        weatherSlide,
        showStartMenuPanel,
        setStartMenuPanel,
        startWeatherApp,
        setStartWeatherApp,
        cityName,
        setCityName,
        radioBtnClicked,
        setRadioBtnClicked,
      }}
    >
      {children}
    </WindowsContext.Provider>
  );
}
