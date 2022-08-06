import "./GameListItem.scss";

export const GameListItem = ({ data }) => {
  return (
    <div className={`GameListItem GameListItem--${data.name}`}>
      <div className="GameListItem__In">
        <div className="GameListItem__Background" />
        <div className="GameListItem__Name">{data.name}</div>
      </div>
    </div>
  );
};
