import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { ApiConfig } from "../../shared/ApiConfig";

const SET_SEARCH = "SET_SEARCH";
const ADD_SEARCH = "GET_SEARCH";

const setSearch = createAction(SET_SEARCH, (article_summary_list) => ({ article_summary_list }));
const addSearch = createAction(ADD_SEARCH, (text) => ({ text }));

const initialState = {
    article_summary_list: [],
};

const getArticleSearchDB = () => {
    return function (dispatch, getState, { history }) {
        axios
            .get(ApiConfig.api)
            .then((res) => {
                console.log(setSearch(res.data));
                dispatch(setSearch(res.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export default handleActions(
    {
        [SET_SEARCH]: (state, action) =>
            produce(state, (draft) => {
                draft.article_summary_list[action.payload.text] =
                    action.payload.article_summary_list;
            }),
        [ADD_SEARCH]: (state, action) =>
            produce(state, (draft) => {
                draft.article_summary_list[action.payload.text].push(...action.payload.text);
            }),
    },
    initialState
);

const actionCreators = {
    setSearch,
    addSearch,
    getArticleSearchDB,
};

export { actionCreators };
