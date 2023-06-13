import React, { ChangeEvent, FC } from 'react';
import { useSelector } from 'react-redux';
import { formatNumber, isNumeric } from '@vkontakte/vkjs';
import { Input } from '@vkontakte/vkui';

import { GameMaxBet, TableButtonFastActions } from '../../configs/config.games';

import { balanceSelector } from '../../redux/slices/user/user.selectors';

import { GameInputProps } from './GameInput.types';

import './GameInput.scss';

export const GameInput: FC<GameInputProps> = ({ value, setValue }) => {
    const userBalance = useSelector(balanceSelector);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let v = '' + e.target.value;
        v = v.replace(/[^0123456789]/g, '');

        if (v !== '' && !isNumeric(v)) {
            return;
        }

        if (Number(v) > Number(userBalance)) {
            v = String(Number(userBalance));
        }

        if (Number(v) > GameMaxBet.dice) {
            v = String(Number(GameMaxBet.dice));
        }

        if (Number(v) < 0) {
            v = '';
        }

        return setValue(v);
    };

    const addSum = (sum: string | number) => {
        if (sum === '/2') {
            setValue(Math.trunc(Number(Number(value) / 2)));
            return;
        }

        if (sum === '*2') {
            if (Math.trunc(Number(Number(value) * 2)) > userBalance) {
                return setValue(userBalance);
            }
            if (Math.trunc(Number(Number(value) * 2)) > GameMaxBet.dice) {
                return setValue(GameMaxBet.dice);
            }
            setValue(Math.trunc(Number(Number(value) * 2)));
            return;
        }

        if (sum === 'all') {
            if (Number(userBalance) > GameMaxBet.dice) {
                return setValue(GameMaxBet.dice);
            }
            setValue(userBalance);
            return;
        }

        if (Number(value) + Number(sum) > userBalance) {
            return setValue(userBalance);
        }

        if (Number(value) + Number(sum) > GameMaxBet.dice) {
            return setValue(GameMaxBet.dice);
        }

        setValue(Number(value) + Number(sum));
    };

    return (
        <div className="GameInput">
            <div className="GameInput__Buttons">
                {TableButtonFastActions.map(({ label, value }) => (
                    <button className="ButtonItem" onClick={() => addSum(value)} key={`FastAction_${value}`}>
                        {label}
                    </button>
                ))}
            </div>
            <div className="GameInput__Input">
                <Input
                    inputMode="numeric"
                    onChange={onInputChange}
                    value={isNumeric(value) ? formatNumber(Number(value)) : value}
                    placeholder="Ваша ставка"
                />
                <div className="GameInput__Input--buttons">
                    <button className="ButtonItem" onClick={() => addSum('/2')}>
                        /2
                    </button>
                    <button className="ButtonItem" onClick={() => addSum('*2')}>
                        x2
                    </button>
                </div>
            </div>
        </div>
    );
};
