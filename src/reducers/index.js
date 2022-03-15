import { INVALID_SUBREDDIT, RECEIVE_POSTS } from "../actions";

const INITIAL_STATE = {
  posts: [],
  error: "",
  lastUpdated: "",
};
export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case RECEIVE_POSTS:
      return { ...state, posts: payload, lastUpdated: Date.now(), error: "" };

    case INVALID_SUBREDDIT:
      return { ...state, posts: [], error: payload, lastUpdated: "" };

    default:
      return state;
  }
}
