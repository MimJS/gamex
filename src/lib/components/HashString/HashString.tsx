import React, { FC } from 'react';

import { HashStringProps } from './HashString.types';

import './HashString.scss';

export const HashString: FC<HashStringProps> = ({ md5, check }) => {
    return (
        <div className="HashString">
            <div className="HashString__In">
                <div className="HashString__md5">Hash: {md5}</div>
                {check ? <div className="HashString__check">Check md5: {check}</div> : null}
            </div>
        </div>
    );
};
