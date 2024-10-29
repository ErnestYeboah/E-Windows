import { useContext, useEffect, useState } from "react";
import { IoCellular } from "react-icons/io5";
import { IoBluetooth } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
import iconsData from "./icons-data";
import Icon from "./taskbar-icons";
import { WindowsContext } from "../../context.jsx/context";

export default function TaskBar() {
  const [time, setTime] = useState(getTime());
  const { setStartMenuPanel } = useContext(WindowsContext);
  const [taskBarApps, setTaskBarApps] = useState(iconsData);

  function getTime() {
    let hours = new Date().getHours().toString().padStart(2, "0");
    const minutes = new Date().getMinutes().toString().padStart(2, "0");
    const seconds = new Date().getSeconds().toString().padStart(2, "0");
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const currentTime = `${hours}:${minutes}:${seconds} ${meridian}`;
    return currentTime;
  }

  const date = new Date().toLocaleDateString("en", {
    weekday: "long",
    month: "numeric",
    year: "numeric",
    day: "numeric",
  });

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 100);
  });

  function addNewItem() {
    const cpyData = [...taskBarApps];
    const newItem = (
      <span>
        <img src="/icons/Instagram.png" alt="" />
      </span>
    );
    cpyData.push(newItem);
    setTaskBarApps(cpyData);
  }

  return (
    <div className="taskbar__wrapper">
      <div className="taskbar">
        <span onClick={() => setStartMenuPanel((p) => !p)}>
          <img src="/icons/Circle-Windows.png" alt="" />
        </span>
        <div className="start__icons">
          {iconsData &&
            taskBarApps.map((item, index) => <Icon key={index} data={item} />)}
        </div>

        <div className="others">
          <div className="icons">
            <IoCellular className="icon" />
            <IoBluetooth className="icon" />
            <IoChatboxSharp className="icon" />
            <IoSearchSharp className="icon" />
            <IoVolumeHigh className="icon" />
          </div>

          <div className="clock">
            <p>{time}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
