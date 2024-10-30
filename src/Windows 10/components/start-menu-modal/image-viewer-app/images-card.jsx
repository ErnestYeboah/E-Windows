import {useContext} from "react"
import {WindowsContext} from "../../../context.jsx/context"
/* eslint-disable react/prop-types */
export default function ImagesCard({ data, onDoubleClick }) {
  const { img, name } = data;
  const {changeWallPaper} = useContext(WindowsContext)

  return (
    <div onDoubleClick={onDoubleClick} className="images__card">
      <img src={img} alt="" />
      <p>{name}</p>
      <button onClick={() => changeWallPaper(data.img)} className="change__wallpaper-btn">Set as Wallpaper</button>
    </div>
  );
}
