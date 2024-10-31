import { useContext, useEffect } from "react";
import DeskTopIcons from "../../desktop/desktop-icon";
import NavigationButton from "../custom hooks/navigations-buttons";
import { WindowsContext } from "../../context.jsx/context";

/* eslint-disable react/prop-types */
export default function RecycleBinWrapper({ deletedItems }) {
  const {
    setShowRecycleItems,
    recycleBin,
    setRecycleBin,
    desktopIcons,
    setDesktopIcons,
  } = useContext(WindowsContext);

  function restoreDeletedItems(currentItem, currentIndex) {
    const cpyRecycleBin = [...recycleBin];
    cpyRecycleBin.splice(currentIndex, 1);
    setRecycleBin(cpyRecycleBin);

    if (cpyRecycleBin.length === 0) {
      let image = "/icons/Recycle-Bin.png";
      desktopIcons[0].image = image;
    }

    const cpyDesktopIcons = [...desktopIcons];
    cpyDesktopIcons.push(currentItem);
    setDesktopIcons(cpyDesktopIcons);
  }

  return (
    <div className="recycle__wrapper">
      <nav className="navigation__sec">
        <h3>Recycle Bin</h3>
        <NavigationButton onClick={() => setShowRecycleItems(false)} />
      </nav>

      {recycleBin.length === 0 && (
        <p
          style={{
            color: "black",
            fontSize: "1.7rem",
            textAlign: "center",
          }}
        >
          Recycle Bin is empty.
        </p>
      )}

      <div className="recycle__items">
        {deletedItems &&
          deletedItems.map((item, index) => (
            <DeskTopIcons
              key={index}
              data={item}
              appState="Restore"
              onClick={() => restoreDeletedItems(item, index)}
            />
          ))}
      </div>
    </div>
  );
}
