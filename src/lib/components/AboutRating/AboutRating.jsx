import { Icon32PollOutline } from '@vkontakte/icons';
import "./AboutRating.scss";

export const AboutRating = () => {
  return (
    <div className="AboutRating">
      <div className="AboutRating__In">
        <div className="AboutRating__Title">
          <Icon32PollOutline />
          <span>Топ дня</span>
        </div>
        <div className="AboutRating__Description">
          Каждый день мы разыгрываем 420 000 000 монет среди топ-10 лучших
          игроков.
        </div>
        <div className="AboutRating__PrizeInfo">
          <div className="PrizeBlock">
            <div className="PrizeBlock__Title">выдача призов</div>
            <div className="PrizeBlock__Value">В 00:00</div>
          </div>
          <div className="PrizeBlock__Separator"></div>
          <div className="PrizeBlock">
            <div className="PrizeBlock__Title">награда</div>
            <div className="PrizeBlock__Value">420кк</div>
          </div>
        </div>
      </div>
    </div>
  );
};
