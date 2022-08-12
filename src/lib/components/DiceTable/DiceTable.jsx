import { Button } from "@vkontakte/vkui";
import './DiceTable.scss'

export const DiceTable = ({ makeBet }) => {
  return (
    <div className="DiceTable">
      <div className="DiceTable__In">
        <div className="DiceTable__Title">Стол ставок</div>
        <div className="DiceTable__Table">
          <div className="Table__Row">
            <Button size="l" onClick={() => makeBet("odd")}>
              Четное
            </Button>
            <Button size="l" onClick={() => makeBet("even")}>
              Нечетное
            </Button>
          </div>
          <div className="Table__Row">
            <Button size="l" onClick={() => makeBet("1")}>
              1
            </Button>
            <Button size="l" onClick={() => makeBet("2")}>
              2
            </Button>
            <Button size="l" onClick={() => makeBet("3")}>
              3
            </Button>
          </div>
          <div className="Table__Row">
            <Button size="l" onClick={() => makeBet("4")}>
              4
            </Button>
            <Button size="l" onClick={() => makeBet("5")}>
              5
            </Button>
            <Button size="l" onClick={() => makeBet("6")}>
              6
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
