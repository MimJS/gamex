import { useSelector } from "react-redux";
import { GameListItem } from "../GameListItem/GameListItem";
import "./GameList.scss";

export const GameList = () => {
  const gameList = useSelector((s) => s.game.gameList);

  return (
    <div className="GameList">
      <div className="GameList__Title">Список игр</div>
      <div className="GameList__In">
        {gameList.map((v, i) => {
          return <GameListItem data={v} key={`Game_${i}`} />;
        })}
      </div>
    </div>
  );
};
