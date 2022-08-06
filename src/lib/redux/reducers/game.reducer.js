import {
  GAME_SET_DATA,
  GAME_SET_GAMELIST,
  GAME_SET_GAMES_ONLINE,
  GAME_SET_NAME,
} from "../../configs/config.redux";

const init = {
  gameName: null,
  gameData: null,
  gameList: [
    {
      name: "wheel",
    },
    {
      name: "double",
    },
    {
      name: "dice",
    },
  ],
  gamesOnline: 0,
};

export const GameReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case GAME_SET_DATA:
      return { ...state, gameData: payload };
    case GAME_SET_NAME:
      return { ...state, gameName: payload };
    case GAME_SET_GAMELIST:
      return { ...state, gameList: payload };
    case GAME_SET_GAMES_ONLINE:
      return { ...state, gamesOnline: payload };
    default:
      return state;
  }
};
