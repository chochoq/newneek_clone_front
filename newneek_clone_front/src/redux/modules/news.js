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

// 액션생성함수
const setArticle = createAction(SET_ARTICLE, (article_summary_list) => ({ article_summary_list }));

// 기본값정하기
const initialState = {
    list: [],
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
const setArticleDB = () => {
    return function (dispatch, getState, { history }) {
        axios({
            methods: 'get',
            url: `${ApiConfig.api}`,
        })
            .then((res) => {
                dispatch(
                    SET_ARTICLE({
                        createdAt: res.data.createdAt,
                        category: res.data.category,
                        title: res.data.title,
                        image: "https://newneek.co/static/media/episode1.ed37b877.png",
                        contents: res.data.contents,
                        id: res.data.id,
                    }),
                );
                history.push('/');
            });
    }
}

// reducer todo
// 리듀서 (immer)불변성 유지 
export default handleActions(
    {
        [SET_ARTICLE]: (state, action) =>
            produce(state, (draft) => {
                // draft.list.push(...action.payload);
        }),
    },
    initialState
)

// 액션 생성자 action creator export
const actionCreators = {
    setArticle,
    // setArticleDB
}

export { actionCreators };