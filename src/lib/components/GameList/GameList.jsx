import { useDispatch, useSelector } from "react-redux";
import { UI_SET_VIEW } from "../../configs/config.redux";
import { VIEW_DICE } from "../../configs/config.vkui";
import { GameListItem } from "../GameListItem/GameListItem";
import "./GameList.scss";

export const GameList = () => {
  const gameList = useSelector((s) => s.game.gameList);
  const dispatch = useDispatch();

  const openGame = (gameId) => {
    if (gameId == "dice") {
      return dispatch({
        type: UI_SET_VIEW,
        payload: VIEW_DICE,
      });
    }
  };

  return (
    <div className="GameList">
      <div className="GameList__Title">Список игр</div>
      <div className="GameList__In">
        {gameList.map((v, i) => {
          return (
            <GameListItem
              onClick={() => openGame(v.id)}
              data={v}
              key={`Game_${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};
