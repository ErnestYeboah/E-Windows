/* eslint-disable react/prop-types */

import { useContext } from "react";
import { WindowsContext } from "../../context.jsx/context";

function Item({ icon, text, className, to }) {
  return (
    <div className={`appcard ${className}`}>
      {to ? (
        <a
          className="link__card"
          target="_blank"
          rel="noopener noreferrer"
          href={to}
        >
          <span>
            <img src={icon} alt="" height="100%" />
          </span>
        </a>
      ) : (
        <span>
          <img src={icon} alt="" height="100%" />
        </span>
      )}
      {text && <p>{text}</p>}
    </div>
  );
}

export default function LifeAtGlancePanel() {
  const { weatherSlide, setStartWeatherApp } = useContext(WindowsContext);

  const styles = {
    translate: `-${weatherSlide}00% 0`,
    transition: "translate 500ms",
  };

  return (
    <div className="life__at__glance-panel">
      <Item className="calendar" icon="/icons/Calendar.png" text="Calendar" />
      <Item
        className="mail"
        to="https://www.gmail.com"
        text="Mail"
        icon="/icons/Mail.png"
      />
      <Item
        className="edge"
        to="https://www.google.com"
        text="Microsft Edge"
        icon="/icons/Edge.png"
      />
      <div onClick={() => setStartWeatherApp(true)} className="weather__system">
        <div className="slide__system" style={styles}>
          <Item className="weather" text="Rainy" icon="/icons/Rainy.png" />
          <Item
            className="weather"
            text="Clear"
            icon="/icons/Weather-clear.png"
          />
          <Item
            className="weather"
            text="Cloudy"
            icon="/icons/Weather-clouds.png"
          />
        </div>
      </div>
      <Item className="other" icon="/images/captain.jpg" />
      <Item
        className="store"
        to="https://playstore.com"
        text=" Store"
        icon="/icons/Windows-Store.png"
      />
    </div>
  );
}
