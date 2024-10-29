/* eslint-disable react/prop-types */
export default function ImagesCard({ data, onClick }) {
  const { img, name } = data;

  return (
    <div onClick={onClick} className="images__card">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
}
