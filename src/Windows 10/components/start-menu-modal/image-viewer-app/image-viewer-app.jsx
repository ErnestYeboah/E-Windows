import NavigationButton from "../../custom hooks/navigations-buttons";
import imagesData from "./images-data";
import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";
import RadioImagesBtn from "./radio-images";
import { useContext, useEffect } from "react";
import { WindowsContext } from "../../../context.jsx/context";

export default function ImagesViewer() {
  const { radioBtnClicked, setRadioBtnClicked, setStartImageViewer } =
    useContext(WindowsContext);

  useEffect(() => {
    if (radioBtnClicked < 0) {
      setRadioBtnClicked(0);
    }

    if (radioBtnClicked > imagesData.length - 1) {
      setRadioBtnClicked(imagesData.length - 1);
    }
  }, [radioBtnClicked]);

  return (
    <div className="image__viewer">
      <nav className="image__viewer-nav">
        <h3>WPS Photos Viewer</h3>
        <div className="arrows">
          <PiLessThanLight
            onClick={() => setRadioBtnClicked((c) => c - 1)}
            className="arrow"
          />
          <PiGreaterThanLight
            onClick={() => setRadioBtnClicked((c) => c + 1)}
            className="arrow"
          />
        </div>
        <NavigationButton onClick={() => setStartImageViewer(false)} />
      </nav>
      <div
        style={{ translate: `-${radioBtnClicked}00% 0` }}
        className="images__slider"
      >
        {imagesData &&
          imagesData.map((item, index) => (
            <div className="slide__card" key={item.id}>
              <img src={item.img} alt="" />
            </div>
          ))}
      </div>

      <RadioImagesBtn />
    </div>
  );
}
