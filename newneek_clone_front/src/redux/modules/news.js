
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
    paging:{start: 0, next:true, current:  null , size:12},
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
const getArticleDB = (start=0, size=12) => {
    // api 받아오기
    return function (dispatch, getState, { history }) {
        // 다음 페이징 목록이 없을때 return
        let _paging = getState().news.paging;
        if (_paging.start && !_paging.next) {
            return;
        }
        // 가져오기 중일 때는 loading을 true로 바꿔줍니다.
        // 연속해서 계속 불러오는 걸 방지하기 위함입니다.
        dispatch(setLoading(true));

        // // 쿼리를 작성해요!
        // // axios로 api를 가져옴
        // let query = axios.get(ApiConfig.api)

        // console.log('-------------------')
        // console.log(query);
        // 만약 시작점이 있다면? (start는 매개변수로 가져오는 걸 잊으면 안됩니다! 
        // -> getPostFB를 부를 때는 ? paging의 next 값을 start로 넘겨주겠죠!)
    //     if (start) {
    //   // 쿼리에 몇번째 게시글부터 가져올 지, 시작점 정보를 추가해줍니다.
    //     query = query.createdAt(start);
    //     }
        
        // 우리가 미리 지정한 사이즈(갯수)보다 1개 더 많이 가져올거예요.
        // 그래야 next에 무언가를 넣어서 다음에 또 불러올 게 있나 없나 판단할 수 있어요.
        axios.get(ApiConfig.api)
            .then((res) => {
                let news_list = [];
                console.log("------------")
                console.log(res.data);
                
                dispatch(setArticle(res));
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
            draft.start = draft.paging.start + draft.paging.size
            
            // draft.article_summary_list = [...draft..., ...list]
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