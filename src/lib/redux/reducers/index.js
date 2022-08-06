import { combineReducers } from "redux";
import { GameReducer } from "./game.reducer";
import { UserReducer } from "./user.reducer";
import { WSReducer } from "./ws.reducer";

export const RootReducer = combineReducers({
  user: UserReducer,
  game: GameReducer,
  ws: WSReducer,
});
