import GamesAndMoreCard from "./games&more-card";
import gamesMoreData from "./games&more-data";
export default function GamesAndMore() {
  return (
    <div className="games-more-panel">
      {gamesMoreData &&
        gamesMoreData.map((app, index) => (
          <GamesAndMoreCard key={app.id} data={app} />
        ))}
    </div>
  );
}
