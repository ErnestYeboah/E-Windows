/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useRef, useState } from "react";
import desktopIconsData from "../desktop/desktop-icons-data";

export const WindowsContext = createContext();

export default function WindowsGlobalState({ children }) {
  const [weatherSlide, setWeatherSlide] = useState(0);
  const timer = useRef();
  const [showStartMenuPanel, setStartMenuPanel] = useState(false);
  const [startImageViewer, setStartImageViewer] = useState(false);
  const [startGallery, setStartGallery] = useState(false);
  const [startWeatherApp, setStartWeatherApp] = useState(false);
  const [cityName, setCityName] = useState("");
  const [radioBtnClicked, setRadioBtnClicked] = useState(0);
  const [recycleBin, setRecycleBin] = useState([]);
  const [showRecycleItems, setShowRecycleItems] = useState(false);
  const [bgImage, setBgImage] = useState("/images/scorpion.jpg");
  const [desktopIcons, setDesktopIcons] = useState(desktopIconsData);
  const [showCalculator, setShowCalculator] = useState(false);
  const [userName, setUserName] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showIntroView, setShowIntroView] = useState(false);

  function changeWallPaper(currentImg) {
    setBgImage(currentImg);
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
        setBgImage,
        bgImage,
        changeWallPaper,
        setRecycleBin,
        recycleBin,
        setShowRecycleItems,
        showRecycleItems,
        desktopIcons,
        setDesktopIcons,
        setShowCalculator,
        showCalculator,
        userName,
        setUserName,
        setShowLoginModal,
        showLoginModal,
        showIntroView,
        setShowIntroView,
      }}
    >
      {children}
    </WindowsContext.Provider>
  );
}
