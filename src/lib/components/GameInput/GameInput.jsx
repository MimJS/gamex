import { formatNumber, isNumeric } from "@vkontakte/vkjs";
import { Input } from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import { GameMaxBet } from "../../configs/config.games";
import "./GameInput.scss";

export const GameInput = ({ value, setValue }) => {
  const userBalance = useSelector((s) => s.user.serverData.balance);
  const onInputChange = (e) => {
    let v = "" + e.target.value;
    v = v.replace(/[^0123456789]/g, "");
    if (v !== "" && !isNumeric(v)) {
      return;
    }
    if (Number(v) > Number(userBalance)) {
      v = String(Number(userBalance));
    }
    if (Number(v) > GameMaxBet.dice) {
      v = String(Number(GameMaxBet.dice));
    }
    if (v < 0) {
      v = "";
    }
    return setValue(v);
  };
  const addSum = (sum) => {
    if (sum == "/2") {
      setValue(Math.trunc(Number(Number(value) / 2)));
      return;
    }
    if (sum == "*2") {
      if (Math.trunc(Number(Number(value) * 2)) > userBalance) {
        return setValue(userBalance);
      }
      if (Math.trunc(Number(Number(value) * 2)) > GameMaxBet.dice) {
        return setValue(GameMaxBet.dice);
      }
      setValue(Math.trunc(Number(Number(value) * 2)));
      return;
    }
    if (sum == "all") {
      if (Number(userBalance) > GameMaxBet.dice) {
        return setValue(GameMaxBet.dice);
      }
      setValue(userBalance);
      return;
    }
    if (Number(Number(value) + sum) > userBalance) {
      return setValue(userBalance);
    }
    if (Number(Number(value) + sum) > GameMaxBet.dice) {
      return setValue(GameMaxBet.dice);
    }

    setValue(Number(Number(value) + sum));
  };
  return (
    <div className="GameInput">
      <div className="GameInput__Buttons">
        <button className="ButtonItem" onClick={() => addSum(1000)}>
          +1K
        </button>
        <button className="ButtonItem" onClick={() => addSum(5000)}>
          +5K
        </button>
        <button className="ButtonItem" onClick={() => addSum(50000)}>
          +50K
        </button>
        <button className="ButtonItem" onClick={() => addSum(250000)}>
          +250K
        </button>
        <button className="ButtonItem" onClick={() => addSum("all")}>
          ВСЁ
        </button>
      </div>
      <div className="GameInput__Input">
        <Input
          inputMode="numeric"
          onChange={onInputChange}
          value={isNumeric(value) ? formatNumber(value) : value}
          placeholder="Ваша ставка"
        />
        <div className="GameInput__Input--buttons">
          <button className="ButtonItem" onClick={() => addSum("/2")}>
            /2
          </button>
          <button className="ButtonItem" onClick={() => addSum("*2")}>
            x2
          </button>
        </div>
      </div>
    </div>
  );
};
