/* eslint-disable react/prop-types */
export default function DeskTopIcons({ data }) {
  return (
    <button className="apps">
      {data.to ? (
        <a rel="noopener noreferrer" target="_blank" href={data.to}>
          <img src={data.image} alt="" />
          <p>{data.name}</p>
        </a>
      ) : (
        <div>
          <img src={data.image} alt="" />

          <p>{data.name}</p>
        </div>
      )}
    </button>
  );
}
