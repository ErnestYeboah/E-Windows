import { useContext } from "react";
import imagesData from "./images-data";
import { WindowsContext } from "../../../context.jsx/context";
export default function RadioImagesBtn() {
  const { radioBtnClicked, setRadioBtnClicked } = useContext(WindowsContext);

  function handleRadioBtnClicked(currentIndex) {
    setRadioBtnClicked(currentIndex);
  }

  return (
    <div className="radio__images">
      {imagesData &&
        imagesData.map((item, index) => (
          <img
            style={{ scale: index === radioBtnClicked ? "1.1" : "1" }}
            onClick={() => handleRadioBtnClicked(index)}
            key={item.id}
            src={item.img}
            alt=""
          />
        ))}
    </div>
  );
}
