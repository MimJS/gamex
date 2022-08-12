import { Icon56RecentOutline } from "@vkontakte/icons";
import "./WaitingBlock.scss";

export const WaitingBlock = () => {
  return (
    <div className="WaitingBlock">
      <div className="WaitingBlock__In">
        <div className="WaitingBlock__Icon">
          <Icon56RecentOutline />
        </div>
        <span>Время ставок!</span>
      </div>
    </div>
  );
};
