import {LOADARTICLES} from '../Actions/articles';

const INITIAL_STATE = {
    articles: []
}

const articleReducer = (state = INITIAL_STATE, action = {}) => {

    switch(action.type) {

        case LOADARTICLES : {

            return {
                ...state, 
                articles: action.payload.articles
            };

        }

        default:

            return state;

    }

};

export default articleReducer;