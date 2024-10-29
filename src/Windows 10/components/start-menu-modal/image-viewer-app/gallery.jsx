import { useState } from "react";
import imagesData from "./images-data";
import ImagesCard from "./images-card";
import ImagesViewer from "./image-viewer-app";
export default function Gallery() {
  const [images, setImages] = useState(imagesData);

  return (
    <>
      <div className="gallery">
        {imagesData &&
          images.map((item) => <ImagesCard key={item.id} data={item} />)}
      </div>

      <ImagesViewer />
    </>
  );
}
