/* eslint-disable react/prop-types */
export default function Icon({ data, onClick }) {
  return (
    <span onClick={onClick}>
      <a target="_blank" rel="noopener noreferrer" href={data.to}>
        <img src={data.img} alt="" />
      </a>
    </span>
  );
}
