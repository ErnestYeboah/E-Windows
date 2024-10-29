import { useContext, useState } from "react";
import imagesData from "./images-data";
import ImagesCard from "./images-card";
import ImagesViewer from "./image-viewer-app";
import { WindowsContext } from "../../../context.jsx/context";
import NavigationButton from "../../custom hooks/navigations-buttons";
export default function Gallery() {
  const [images, setImages] = useState(imagesData);
  const {
    startImageViewer,
    setStartImageViewer,
    setRadioBtnClicked,
    setStartGallery,
  } = useContext(WindowsContext);

  function launchImageViewer(currentIndex) {
    setStartImageViewer(true);
    setRadioBtnClicked(currentIndex);
  }

  return (
    <>
      <div className="gallery__wrapper">
        <NavigationButton onClick={() => setStartGallery(false)} />
        <div className="gallery">
          {imagesData &&
            images.map((item, index) => (
              <ImagesCard
                onClick={() => launchImageViewer(index)}
                key={item.id}
                data={item}
              />
            ))}
        </div>
      </div>

      {startImageViewer && <ImagesViewer />}
    </>
  );
}
