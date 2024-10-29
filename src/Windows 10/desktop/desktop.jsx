import { useContext } from "react";
import StartMenuPanel from "../components/start-menu-modal/start-menu-panel";
import TaskBar from "../components/taskbar/taskbar";
import "./desktop.css";
import { WindowsContext } from "../context.jsx/context";
import IntroView from "./intro-view";
import WeatherApp from "../components/start-menu-modal/weather-app.jsx/weather-app";
import Gallery from "../components/start-menu-modal/image-viewer-app/gallery";
export default function WindowsDesktop() {
  const { setStartMenuPanel, startWeatherApp } = useContext(WindowsContext);
  return (
    <>
      <IntroView />
      <div onClick={() => setStartMenuPanel(false)} className="desktop">
        <div className="apps__wrapper">
          <button className="apps">
            <img src="/icons/Recycle-Bin.png" alt="recycle-bin" />
            <p>Recycle Bin</p>
          </button>
          <button className="apps">
            <img src="/icons/This-Pc.png" alt="" />
            <p>This PC</p>
          </button>
          <button className="apps">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com"
            >
              <img src="/icons/Google-Chrome-Google-Chrome.png" alt="" />
              <p>Chrome</p>
            </a>
          </button>
          <button className="apps">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com"
            >
              <img src="/icons/Twitter.512.png" alt="twitter" />
              <p>Twitter</p>
            </a>
          </button>
          <button className="apps">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/Instagram.png" alt="instagram" />
              <p>Instagram</p>
            </a>
          </button>
        </div>
      </div>
      {startWeatherApp && <WeatherApp />}
      <Gallery />
      <StartMenuPanel />
      <TaskBar />
    </>
  );
}
