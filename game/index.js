import { Map } from 'immutable';

const MOVE = 'MOVE';
export const move = (position, player) => ({
  type: MOVE,
  position: position,
  player: player
});
export default function reducer(state = { board: Map(), turn: '' }, action) {
  // TODO
  switch (action.type) {
    case MOVE: {
      if (action.type === MOVE) {
        let board = Map();
        return { board: state.board.setIn(action.postion, action.player) };
      }
    }
    case 'START': {
      return state;
    }
    default: {
      return state;
    }
  }
}
