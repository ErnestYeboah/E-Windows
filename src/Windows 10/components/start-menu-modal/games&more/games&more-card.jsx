/* eslint-disable react/prop-types */
export default function GamesAndMoreCard({ data }) {
  return (
    <div className="appcard">
      {data.to ? (
        <a
          className="link__card"
          rel="noopener noreferre"
          target="_blank"
          href={data.to}
        >
          <span>
            <img src={data.img} alt="" />
          </span>
        </a>
      ) : (
        <span>
          <img src={data.img} alt="" />
        </span>
      )}
      <p>{data.text}</p>
    </div>
  );
}
