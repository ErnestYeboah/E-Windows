import { useContext, useState } from "react";
import StartMenuPanel from "../components/start-menu-modal/start-menu-panel";
import TaskBar from "../components/taskbar/taskbar";
import "./desktop.css";
import { WindowsContext } from "../context.jsx/context";
// import IntroView from "./intro-view";
import WeatherApp from "../components/start-menu-modal/weather-app.jsx/weather-app";
import Gallery from "../components/start-menu-modal/image-viewer-app/gallery";
import desktopIconsData from "./desktop-icons-data";
export default function WindowsDesktop() {
  const {
    setStartMenuPanel,
    startWeatherApp,
    startGallery,
    deleteItemToRecycleBin,
  } = useContext(WindowsContext);

  const [desktopIcons, setDesktopIcons] = useState(desktopIconsData);
  console.log(desktopIcons);

  return (
    <>
      {/* <IntroView /> */}
      <div onClick={() => setStartMenuPanel(false)} className="desktop">
        <div className="apps__wrapper"></div>
      </div>
      {startWeatherApp && <WeatherApp />}
      {startGallery && <Gallery />}
      <StartMenuPanel />
      <TaskBar />
    </>
  );
}
