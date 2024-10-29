import { useContext, useRef } from "react";
import LifeAtGlancePanel from "./life-at-glance";
import QuickApps from "./quick-apps";
import TopNav from "./top-nav";
import { WindowsContext } from "../../context.jsx/context";
import GamesAndMore from "./games&more/games-and-more";

export default function StartMenuPanel() {
  const { showStartMenuPanel } = useContext(WindowsContext);

  return (
    <div className={showStartMenuPanel ? "start__menu active" : "start__menu"}>
      <TopNav />
      <div className="start__menu-panel">
        <QuickApps />
        <div className="start__menu-panel__second-col">
          <LifeAtGlancePanel />
          <GamesAndMore />
        </div>
      </div>
    </div>
  );
}
