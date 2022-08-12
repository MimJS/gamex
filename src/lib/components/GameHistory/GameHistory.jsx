import { HorizontalScroll } from "@vkontakte/vkui";
import "./GameHistory.scss";

export const GameHistory = ({ data }) => {
  return (
    <div className="GameHistory">
      <div className="GameHistory__In">
        <span>История игр</span>
        <HorizontalScroll className="GameHistory__List">
          <div className="GameHistory__List--in">
            {data.map((v, i) => {
              return (
                <div
                  style={v.style}
                  key={"GameHistory__Item-" + i}
                  className="GameHistory__Item"
                >
                  <span>{v.value}</span>
                </div>
              );
            })}
          </div>
        </HorizontalScroll>
      </div>
    </div>
  );
};
