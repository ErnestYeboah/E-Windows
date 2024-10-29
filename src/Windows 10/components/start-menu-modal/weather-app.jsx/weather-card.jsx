/* eslint-disable react/prop-types */
export default function WeatherCard({ data }) {
  const {
    name,
    main: { humidity, pressure, temp },
    sys: { country },
    weather: [{ main, description }],
  } = data;

  const date = new Date().toLocaleDateString("en", {
    month: "long",
    weekday: "long",
    year: "numeric",
  });

  function getCurrentTime() {
    let hours = new Date().getHours();
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    const minutes = new Date().getMinutes().toString().padStart(2, "0");
    // const meridian = hours >= 12 ? "PM" : "AM";

    const currentTime = `${hours} : ${minutes} `;
    return currentTime;
  }

  return (
    <div>
      {data && (
        <div className="weather__card">
          <div className="state">
            <div>
              <h1>City </h1>
              <p>{name}</p>
            </div>
            <div>
              <h1>Country </h1>
              <p>{country}</p>
            </div>
          </div>

          <div className="degrees">
            <p>
              <span className="title">Humidity </span> {humidity}
              <span className="unit">g.m-3</span>
            </p>
            <p>
              <span className="title">Temperature </span> {temp}
              <span className="unit">°F</span>
            </p>
            <p>
              <span className="title">Pressure </span> {pressure}
              <span className="unit">Pa</span>
            </p>
          </div>

          <div className="weather__type">
            <div>
              <h1>Main Weather</h1>
              <p>{main}</p>
            </div>
            <div>
              <h1>Description</h1>
              <p>{description}</p>
            </div>
          </div>

          <p data-type="date">{date}</p>
          <p data-type="time">{getCurrentTime()}</p>
        </div>
      )}
    </div>
  );
}
