import { Avatar, SimpleCell } from "@vkontakte/vkui";
import { Icon28MoneyWadOutline } from "@vkontakte/icons";
import "./RatingCell.scss";
import { useSelector } from "react-redux";
import { DayPrizePositions } from "../../configs/config.rating";

export const RatingCell = ({ vkData, serverData, position }) => {
  const { id } = useSelector((s) => s.user.vkData);

  return (
    <SimpleCell
      className="RatingCell"
      before={
        <div className="RatingCell__Before">
          <div className="RatingCell__Position">{position}</div>
          <Avatar
            src={vkData.photo_100}
            size={44}
            className={id === serverData.id ? "RatingCell__Position--my" : ""}
          />
        </div>
      }
      hasHover={false}
      hasActive={false}
      after={
        position &&
        DayPrizePositions[position] && (
          <div className="RatingCell__Prize">
            <div className="Prize__Title">получит</div>
            <div className="Prize__Value">{DayPrizePositions[position]}кк</div>
          </div>
        )
      }
      description={
        <div className="RatingCell__Balance">
          {serverData.day_win} <Icon28MoneyWadOutline width={15} height={15} />
        </div>
      }
    >
      <div className="RatingCell__UserName">
        {vkData
          ? `${vkData.first_name} ${vkData.last_name}`
          : `@id${serverData.id}`}
      </div>
    </SimpleCell>
  );
};
