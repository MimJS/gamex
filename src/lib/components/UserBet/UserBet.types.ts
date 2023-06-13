import { CSSProperties } from 'react';
import { VKDataUser } from '../../types/api.vk';

export interface UserBetProps {
    betSum: number;
    value: string | number;
    style: CSSProperties;
    userId?: number;
    vkData?: VKDataUser;
}
