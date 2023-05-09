import React, { FC } from 'react';
import { Icon28MoneyWadOutline } from '@vkontakte/icons';
import { useSelector } from 'react-redux';

import { formatCoins } from '../../modules/utils';
import { UserBalanceProps } from './UserBalance.types';
import { balanceSelector } from '../../redux/slices/user/user.selectors';

import './UserBalance.scss';

export const UserBalance: FC<UserBalanceProps> = ({ size = 's', title }) => {
    const balance = useSelector(balanceSelector);

    const iconSize = size === 's' ? 15 : 30;

    return (
        <div className={`UserBalance UserBalance--sz-${size}`}>
            <div className="UserBalance__In">
                {title ? <div className="UserBalance--title">{title}</div> : null}
                <span>{formatCoins(balance)}</span>
                <Icon28MoneyWadOutline width={iconSize} height={iconSize} />
            </div>
        </div>
    );
};
