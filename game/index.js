import { Map } from 'immutable';

const MOVE = 'MOVE';
export const move = (player, position) => ({
  type: MOVE,
  position: position,
  player: player
});
export default function reducer(state = { board: Map(), turn: 'X' }, action) {
  // TODO
  switch (action.type) {
    case MOVE:
      let player = action.player;
      player === 'X' ? (player = 'O') : (player = 'X');
      return {
        board: state.board.setIn(action.position, action.player),
        turn: player
      };

    case 'START':
      return state;

    default:
      return state;
  }
}
