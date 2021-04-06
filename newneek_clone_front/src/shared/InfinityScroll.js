import React from "react";
import _ from "lodash";
import { Spinner } from "../elements";

// 무한 스크롤
const InfinityScroll = (props) => {
const { children, callNext, is_next, loading } = props;

// 스크롤 이벤트에 throttle을 붙여줍니다.
//   이 부분 자세한 내용이 궁금하다면 심화 강의 3주차 throttle, 4주차 무한스크롤 만들기를 참고해주세요!
const _handleScroll = _.throttle(() => {

    // 만약 로딩 중이라면? (이미 게시글을 불러오고 있었다면?)
    // 더 불러오지 않게 해요!
    if (loading) {
        return;
}

const { innerHeight } = window;
const { scrollHeight } = document.body;

// 스크롤 위치를 계산해요
// 스크롤 위치를 계산해서 다음 목록을 불러옵니다.
const scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;

if (scrollHeight - innerHeight - scrollTop < 200) {
    callNext();
}
}, 300);

const handleScroll = React.useCallback(_handleScroll, [loading]);

React.useEffect(() => {
        if (loading) {
            return;
        }

        // is_next (다음 게시글이 있는 지 여부)가 참일 때 이벤트를 구독하고, 거짓이라면 구독을 해제해요!
        if (is_next) {
            window.addEventListener("scroll", handleScroll);
        } else {
            window.removeEventListener("scroll", handleScroll);
        }

        // 컴포넌트가 화면에서 사라질 때 이벤트 구독을 해제합니다.
        return () => window.removeEventListener("scroll", handleScroll);
    }, [is_next, loading]);

        return (
            <React.Fragment>
                {children}
                {/* 다음 게시글이 있으면 스피너를 보여줍니다. */}
                {is_next && <Spinner />}
            </React.Fragment>
        );
};

InfinityScroll.defaultProps = {
    children: null,
    callNext: () => {},
    is_next: false,
    loading: false,
};

export default InfinityScroll;
