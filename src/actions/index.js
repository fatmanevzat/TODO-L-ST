import axios from "axios";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const INVALID_SUBREDDIT = "INVALID_SUBREDDIT";

export function fetchPosts(subreddit) {
  return (dispatch) => {
    axios
      .get(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.data.data.children)
      .then((data) => dispatch({ type: RECEIVE_POSTS, payload: data }))
      .catch((err) =>
        dispatch({ type: INVALID_SUBREDDIT, payload: err.message })
      );
  };
}
