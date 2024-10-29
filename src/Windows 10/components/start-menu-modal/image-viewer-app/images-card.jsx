/* eslint-disable react/prop-types */
export default function ImagesCard({ data }) {
  const { img, name } = data;

  return (
    <div className="images__card">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
}
