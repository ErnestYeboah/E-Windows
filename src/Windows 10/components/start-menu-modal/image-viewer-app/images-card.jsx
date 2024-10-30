/* eslint-disable react/prop-types */
export default function ImagesCard({ data, onDoubleClick }) {
  const { img, name } = data;

  return (
    <div onDoubleClick={onDoubleClick} className="images__card">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
}
