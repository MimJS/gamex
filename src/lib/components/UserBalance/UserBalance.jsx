import { Icon28MoneyWadOutline } from "@vkontakte/icons";
import { useSelector } from "react-redux";
import "./UserBalance.scss";
import { formatCoins } from "../../modules/utils";

export const UserBalance = ({ size = "s", title }) => {
  const balance = useSelector((s) => s.user.serverData.balance);

  return (
    <div className={`UserBalance UserBalance--sz-${size}`}>
      <div className="UserBalance__In">
        {title ? <div className="UserBalance--title">{title}</div> : null}
        <span>{formatCoins(balance)}</span>
        <Icon28MoneyWadOutline
          width={size == "s" ? 14 : 30}
          height={size == "s" ? 14 : 30}
        />
      </div>
    </div>
  );
};
