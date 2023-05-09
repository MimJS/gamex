import React, { FC } from 'react';
import { PaddingWrapperProps } from './PaddingWrapper.types';

import './PaddingWrapper.scss';

export const PaddingWrapper: FC<PaddingWrapperProps> = ({ children, style }) => {
    return (
        <div className="PaddingWrapper" style={style}>
            {children}
        </div>
    );
};
