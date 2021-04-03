import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_POST = "SET_POST";

const setPost = createAction(SET_POST, (news_list) => ({ news_list }));


const initialState = {
    list: [],
};

// 게시글 하나에 있어야하는 정보(미리넣어줌)
const initialNews = {
    createdAt: "2021-02-27 10:00:00",
    category: "카테고리",
    title: "제목",
    image: "https://newneek.co/static/media/episode1.ed37b877.png",
    contents: "내용",
    id: 0,
};


// reducer
// 리듀서 (immer)불변성유지해주는 곳
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            
        }),
    },
    initialState
)

// action creator export
const actionCreators = {
    setPost,
}

export { actionCreators };