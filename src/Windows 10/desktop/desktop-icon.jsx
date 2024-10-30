/* eslint-disable react/prop-types */
export default function DeskTopIcons({ data, onClick }) {
  return (
    <button className="apps">
      {data.to ? (
        <a rel="noopener noreferrer" target="_blank" href={data.to}>
          <img src={data.image} alt="" />
          <p >{data.name}</p>
        </a>
      ) : (
        <div>
          <img src={data.image} alt="" />
          <p >{data.name}</p>
        </div>
      )}

      {data.hasDelete && (
        <div className="popup">
          <p onClick={onClick}>Delete</p>
        </div>
      )}
    </button>
  );
}
