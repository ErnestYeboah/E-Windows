import { useContext, useState, useEffect } from "react";
import StartMenuPanel from "../components/start-menu-modal/start-menu-panel";
import TaskBar from "../components/taskbar/taskbar";
import "./desktop.css";
import { WindowsContext } from "../context.jsx/context";
import IntroView from "./intro-view";
import WeatherApp from "../components/start-menu-modal/weather-app.jsx/weather-app";
import Gallery from "../components/start-menu-modal/image-viewer-app/gallery";
import desktopIconsData from "./desktop-icons-data";
import DeskTopIcons from "./desktop-icon";
import RecycleBinWrapper from "../components/recycle-bin/recycle-bin";

export default function WindowsDesktop() {
  const {
    setStartMenuPanel,
    startWeatherApp,
    startGallery,
    showRecycleItems,
    recycleBin,
    setRecycleBin,
    desktopIcons,
    setDesktopIcons,
    bgImage,
  } = useContext(WindowsContext);

  function deleteItem(currentApp, currentIndex) {
    const cpyDesktopIcons = [...desktopIcons];
    recycleBin.push(currentApp);
    cpyDesktopIcons.splice(currentIndex, 1);
    setDesktopIcons(cpyDesktopIcons);

    let [{ recycleBinImage, image }] = desktopIcons;
    image = "/icons/Recycle-Bin-Full.png";
    desktopIcons[0].image = image;
  }

  return (
    <>
      <IntroView />
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        onClick={() => setStartMenuPanel(false)}
        className="desktop"
      >
        <div className="apps__wrapper">
          {desktopIconsData &&
            desktopIcons.map((icon, index) => (
              <DeskTopIcons
                onClick={() => deleteItem(icon, index)}
                key={index}
                data={icon}
              />
            ))}
        </div>
      </div>
      {startWeatherApp && <WeatherApp />}
      {startGallery && <Gallery />}
      {showRecycleItems && <RecycleBinWrapper deletedItems={recycleBin} />}
      <StartMenuPanel />
      <TaskBar />
    </>
  );
}
