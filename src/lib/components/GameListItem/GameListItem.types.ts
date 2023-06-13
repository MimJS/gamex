import { GameListElementType } from '../../types/data.game';

export interface GameListItemProps {
    data: GameListElementType;
    onClick: () => void;
}
