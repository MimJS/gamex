import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderContent,
} from "@vkontakte/vkui";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  DiceTable,
  GameHistory,
  GameInput,
  HashString,
  PaddingWrapper,
  TimerBlock,
  UserBalance,
  UserBet,
  WaitingBlock,
} from "../../lib/components";
import { UI_SET_VIEW } from "../../lib/configs/config.redux";
import { VIEW_HOME } from "../../lib/configs/config.vkui";

export const DicePanel = ({ id }) => {
  const dispatch = useDispatch();

  const [betSum, setBetSum] = useState("");

  const onClose = () => {
    return dispatch({
      type: UI_SET_VIEW,
      payload: VIEW_HOME,
    });
  };

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        before={<PanelHeaderBack onClick={onClose} />}
      >
        <PanelHeaderContent>Dice</PanelHeaderContent>
      </PanelHeader>
      <PaddingWrapper>
        <UserBalance size="s" />
        <GameHistory
          data={[
            { value: 1, style: { background: "var(--color__dice_odd)" } },
            { value: 2, style: { background: "var(--color__dice_even)" } },
          ]}
        />
        <WaitingBlock />
        <TimerBlock time={120} />
        <GameInput value={betSum} setValue={setBetSum} />
        <DiceTable
          makeBet={(r) => {
            console.log(r);
          }}
        />
        <UserBet
          vkData={{ first_name: "Mikhail", last_name: "Mateevsky" }}
          betSum={1000000}
          value={5}
          style={{ backgroundColor: "var(--color__dice_number)" }}
        />
        <UserBet
          vkData={{ first_name: "Mikhail", last_name: "Mateevsky" }}
          betSum={100000000}
          value={'Чет'}
          style={{ backgroundColor: "var(--color__dice_even)" }}
        />
        <UserBet
          vkData={{ first_name: "Mikhail", last_name: "Mateevsky" }}
          betSum={150000}
          value={'Нечет'}
          style={{ backgroundColor: "var(--color__dice_odd)" }}
        />
        <HashString md5={"nfdsfndjfsj2n3232kaxk"} check={"2@fdsmfdskfsmkfds"} />
      </PaddingWrapper>
    </Panel>
  );
};
