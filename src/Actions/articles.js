export const LOADARTICLES = 'LOADARTICLES';
export const ARTICLES_FETCH = 'ARTICLES_FETCH';

export function displayArticles(articles) {
    return {
        type: LOADARTICLES,
        payload: {articles}
    }
}

export function fetchArticles() {
    return {
        type: ARTICLES_FETCH
    }
}