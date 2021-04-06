
import { createAction, handleActions } from "redux-actions";
// 불변성 관리 패키지
import { produce } from "immer";

// api
import axios from 'axios';
import { ApiConfig } from '../../shared/ApiConfig';

// articleSummaryList
// 액션타입
const SET_ARTICLE = "SET_ARTICLE";
const SET_LOADING = "SET_LOADING";
// 현재 페이지, 시작 또는 끝 페이지를 다루는 액션
const UPDATE_CURRENT = "UPDATE_CURRENT";
const UPDATE_START_END = "UPDATE_START_END";



// 액션생성함수
const setArticle = createAction(SET_ARTICLE, (article_summary_list) => ({ article_summary_list }));
const setLoading = createAction(SET_LOADING, (loading) => ({ loading }));
const updateCurrent = createAction(UPDATE_CURRENT, (paging) => ({ paging }));
const updateStartEnd = createAction(UPDATE_START_END, (paging) => ({ paging }));

// 기본값 정하기
const initialState = {
    article_summary_list: [],
    loading: false,
    paging:{start: 0, next:12, current: 1},
};

// 페이지 이동
// 현재 페이지
const updateCurrentPage = (page) => {
    return function (dispatch, getState, { history }) {
        // 리덕스에 현재 페이지 저장
        dispatch(updateCurrent({
        current: page
        }));
        // 서버로부터 리스트 가져오기
        dispatch(getArticleDB());

    }
};
// 처음, 끝 페이지
const updateStartEndPage = (start, end) => {
    return function (dispatch, getState, { history }) {
        dispatch(updateStartEnd({
        start: start+12,
        end: end+12,
        
        }))
    }
}

// 글 가져오기
const getArticleDB = (start=null, size=12) => {
    // api 받아오기
    return function (dispatch, getState, { history }) {

        // 다음 페이징 목록이 없을때 return
        let _paging = getState().news.paging;
        if (_paging.start && !_paging.next) {
            return;
        }

        dispatch(setLoading(true));
        
        axios.get(
            ApiConfig.api
        )
            .then((res) => {
                console.log(setArticle(res.data));
                dispatch(setArticle(res.data));
            })
            .catch((error) => {
            // error 핸들링
                console.log(error);
            })
        //로딩중이 아닌 상태로 변환
        setLoading(false);
    };
}

// reducer todo
// 리듀서 (immer)불변성 유지 
export default handleActions(
    {
        [SET_ARTICLE]: (state, action) => produce(state, (draft) => {
            draft.article_summary_list.push(...action.payload.article_summary_list);
            draft.loading = false;
        }),
        [SET_LOADING]: (state, action) => produce(state, (draft) => {
            draft.loading = action.payload.loading;
        }),
        [UPDATE_CURRENT]: (state, action) =>
            produce(state, (draft) => {
                draft.paging.current = action.payload.paging.current;
            }),
        [UPDATE_START_END]: (state, action) =>
        produce(state, (draft) => {
            draft.paging.start = action.payload.paging.start;
            draft.paging.end = action.payload.paging.end;
        }),
    },
    initialState
)

// 액션 생성자 action creator export
const actionCreators = {
    setArticle,
    getArticleDB,
    setLoading,
    updateCurrentPage,
    updateStartEndPage,
}

export { actionCreators };