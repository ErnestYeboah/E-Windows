/* eslint-disable react/prop-types */
export default function FApps({ data }) {
  return (
    <div tabIndex="0" className="most-used-app">
      <span>
        <img src={data.img} alt="" />
      </span>
      <p>{data.name}</p>
    </div>
  );
}
