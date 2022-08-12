import { Icon28MoneyWadOutline } from "@vkontakte/icons";
import { Avatar, SimpleCell } from "@vkontakte/vkui";
import { formatCoins } from "../../modules/utils";
import "./UserBet.scss";

export const UserBet = ({ betSum, value, style, userId, vkData }) => {
  return (
    <div className="UserBet">
        <SimpleCell
      className="UserBet__In"
      hasHover={false}
      hasActive={false}
      target={"_blank"}
      href={`https://vk.com/id${userId}`}
      before={<Avatar size={40} src={vkData?.photo_100} />}
      description={
        <span className="UserBet__sum">
          {formatCoins(betSum)}
          <Icon28MoneyWadOutline width={15} height={15} />
        </span>
      }
      after={
        <div className="UserBet__Bet" style={style}>
          <span className="UserBet__Bet--value">{value}</span>
        </div>
      }
    >
      {vkData?.first_name} {vkData?.last_name}
    </SimpleCell>
    </div>
  );
};
