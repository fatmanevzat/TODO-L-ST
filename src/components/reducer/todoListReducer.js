import { ADD, EDIT, DELETE } from "../action/updateList";

const INITIAL_STATE = [];

export default function todoListReducer(
  state = INITIAL_STATE,
  { type, payload, index }
) {
  const tempState = [...state];

  switch (type) {
    case ADD:
      return [...state, payload];

    case EDIT:
      tempState[index] = payload;
      return tempState;

    case DELETE:
      tempState.splice(index, 1);
      return tempState;

    default:
      return state;
  }
}
