import { useContext } from "react";
import { WindowsContext } from "../context.jsx/context";

/* eslint-disable react/prop-types */
export default function DeskTopIcons({ data, onClick, appState = "Delete" }) {
  const { recycleBin, setShowRecycleItems, setShowCalculator } =
    useContext(WindowsContext);

  function launchApplication(appName) {
    if (appName === "Recycle Bin") setShowRecycleItems(true);
    if (appName === "Calculator") setShowCalculator(true);
  }

  return (
    <button className="apps">
      {data.to ? (
        <a rel="noopener noreferrer" target="_blank" href={data.to}>
          <img src={data.image} alt="" />
          <p>{data.name}</p>
        </a>
      ) : (
        <div onDoubleClick={() => launchApplication(data.name)}>
          <img src={data.image} alt="" />
          <p>{data.name}</p>
        </div>
      )}

      {data.hasDelete && (
        <div className="popup">
          <p onClick={onClick}>{appState}</p>
        </div>
      )}
    </button>
  );
}
