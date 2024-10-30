/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useRef, useState } from "react";

export const WindowsContext = createContext();
export default function WindowsGlobalState({ children }) {
  const [weatherSlide, setWeatherSlide] = useState(0);
  const timer = useRef();
  const [showStartMenuPanel, setStartMenuPanel] = useState(false);
  const [startImageViewer, setStartImageViewer] = useState(false);
  const [startGallery, setStartGallery] = useState(false);
  const [startWeatherApp, setStartWeatherApp] = useState(false);
  const [cityName, setCityName] = useState("");
  const [radioBtnClicked, setRadioBtnClicked] = useState("");
  const [recycleBin, setRecycleBin] = useState([]);

  function deleteItemToRecycleBin(e) {
    const del = e.key === "Delete";
    if (del) {
      console.log("deleted");
    }
  }

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
        startImageViewer,
        setStartImageViewer,
        setStartGallery,
        startGallery,
        deleteItemToRecycleBin,
      }}
    >
      {children}
    </WindowsContext.Provider>
  );
}
