import axios from 'axios';

import { ARTICLES_FETCH, displayArticles } from "../Actions/articles";

const articlesAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case ARTICLES_FETCH:
      //console.log("mes articles");
      axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        store.dispatch(displayArticles(response.data))
      })
      .catch((error) => {
        console.log(error);
        next(action);
      })

      break;

    default:
      next(action);
  }
};

export default articlesAPI;
