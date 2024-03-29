import React, { FC } from 'react';
import { GameListItemProps } from './GameListItem.types';

import './GameListItem.scss';

export const GameListItem: FC<GameListItemProps> = ({ data, onClick }) => {
    return (
        <div onClick={onClick} className={`GameListItem GameListItem--${data.id}`}>
            <div className="GameListItem__In">
                <div className="GameListItem__Background" />
                <div className="GameListItem__Name">{data.name}</div>
            </div>
        </div>
    );
};
