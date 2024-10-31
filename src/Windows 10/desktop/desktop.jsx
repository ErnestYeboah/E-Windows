import { useContext } from "react";
import StartMenuPanel from "../components/start-menu-modal/start-menu-panel";
import TaskBar from "../components/taskbar/taskbar";
import "./desktop.css";
import { WindowsContext } from "../context.jsx/context";
import IntroView from "./intro-view";
import WeatherApp from "../components/start-menu-modal/weather-app/weather-app";
import Gallery from "../components/start-menu-modal/image-viewer-app/gallery";
import desktopIconsData from "./desktop-icons-data";
import DeskTopIcons from "./desktop-icon";
import RecycleBinWrapper from "../components/recycle-bin/recycle-bin";
import Calculator from "../components/calculator-app/calculator";
import LoginModal from "./login-wraper";

export default function WindowsDesktop() {
  const {
    setStartMenuPanel,
    startWeatherApp,
    startGallery,
    showRecycleItems,
    recycleBin,
    desktopIcons,
    setDesktopIcons,
    bgImage,
    showCalculator,
    setShowCalculator,
    showLoginModal,
    showIntroView,
  } = useContext(WindowsContext);

  function deleteItem(currentApp, currentIndex) {
    const cpyDesktopIcons = [...desktopIcons];
    recycleBin.push(currentApp);
    cpyDesktopIcons.splice(currentIndex, 1);
    setDesktopIcons(cpyDesktopIcons);

    let image = "/icons/Recycle-Bin-Full.png";
    desktopIcons[0].image = image;
  }

  function triggerOutsideClick() {
    setStartMenuPanel(false);
    setShowCalculator(false);
  }

  return (
    <>
      {showLoginModal && <LoginModal />}
      {showIntroView && <IntroView />}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        onClick={triggerOutsideClick}
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
      {showCalculator && <Calculator />}
      <StartMenuPanel />
      <TaskBar />
    </>
  );
}
