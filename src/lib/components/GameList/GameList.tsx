import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ROUTES_PATH } from '../../configs/config.router';

import { gameListSelector } from '../../redux/slices/game/game.selectors';

import { GameListItem } from '../GameListItem/GameListItem';

import './GameList.scss';

export const GameList = () => {
    const navigate = useNavigate();
    const gameList = useSelector(gameListSelector);

    const openGame = (gameId: string) => {
        if (gameId === 'dice') {
            navigate(ROUTES_PATH.DICE);
        }
    };

    return (
        <div className="GameList">
            <div className="GameList__Title">Список игр</div>
            <div className="GameList__In">
                {gameList.map((v, i) => {
                    return <GameListItem onClick={() => openGame(v.id)} data={v} key={`Game_${i}`} />;
                })}
            </div>
        </div>
    );
};
