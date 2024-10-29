import FApps from "./f-used-apps";
import quickAppData from "./quick-app-data";
import { IoSettingsSharp } from "react-icons/io5";
import { MdFolder } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";

import { IoPower } from "react-icons/io5";

export default function QuickApps() {
  return (
    <div className="quick__apps-container">
      <h3 style={{ paddingInline: "var(--small-padding)" }}>Most Used</h3>
      <div className="most__used__apps-container">
        {quickAppData &&
          quickAppData.map((item, index) => <FApps key={index} data={item} />)}
      </div>

      <div className="quick__tools">
        <p>
          <MdFolder /> File Explorer
        </p>
        <p>
          <IoSettingsSharp /> Settings
        </p>
        <p>
          <IoPower /> Power
        </p>
        <p>
          <MdFormatListBulleted /> All Apps
        </p>
      </div>
    </div>
  );
}
