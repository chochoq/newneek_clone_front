import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


// api
import axios from 'axios';
import { ApiConfig } from '../../shared/ApiConfig';

// // 날짜
import "moment";
import moment from "moment";

// article
// articleSummaryList
// 액션타입
const SET_ARTICLE = "SET_ARTICLE";
const SET_LOADING = "SET_LOADING";


// 액션생성함수
const setArticle = createAction(SET_ARTICLE, (article_summary_list) => ({ article_summary_list }));
const setLoading = createAction(SET_LOADING, (loading) => ({ loading }));


// 기본값정하기
const initialState = {
    article_summary_list: [],
    loading: false
};

// 게시글 하나에 있어야하는 정보(미리넣어줌)
const initialArticle = {
    createdAt: "2021-02-27 10:00:00",
    category: "카테고리",
    title: "제목",
    image: "https://newneek.co/static/media/episode1.ed37b877.png",
    contents: "내용",
    id: 0,
};

    

// 글 가져오기
const getArticleDB = (article) => {
    // api 받아오기
        return function (dispatch, getState, { history }) {
            setLoading(true);
            axios.get(
                ApiConfig.api
            )
                .then((res) => {
                    // console.log(res.data);
                    dispatch(setArticle(res.data));
                })
        };

}


// reducer todo
// 리듀서 (immer)불변성 유지 
export default handleActions(
    {
        [SET_ARTICLE]: (state, action) => produce(state, (draft) => {
            draft.article_summary_list = action.payload.article_summary_list;
            draft.loading = false;
            // console.log("----------")
            // console.log(action.payload.article_summary_list);
        }),
    },
    initialState
)

// 액션 생성자 action creator export
const actionCreators = {
    setArticle,
    getArticleDB
}

export { actionCreators };