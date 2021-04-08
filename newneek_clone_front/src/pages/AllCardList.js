// AllCardList.js
import React, { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as newsActions } from "../redux/modules/news";

import { history } from "../redux/configureStore";

import Card from "../component/Card";
import { Button } from "../elements";

import axios from "axios";

// mok api
// import Data from '../CardDate';

// 뉴스레터 1개 뷰를 담당한다  article
// createdAt : 뉴스 생성일자 초까지
// category : 뉴스 카테고리
// title   : 뉴스 제목
// image   : 뉴스 이미지
// contents  : 뉴스 내용
// id : 뉴스 게시글 프라이머리키

const AllCardList = (props) => {
    console.log(props);
    // const [api, setApi] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    // const [page, setPage] = useState(0);

    // useEffect(() => {
    //     const fetchUsers = async (param) => {

    //         try {
    //             setError(null);
    //             setApi(null);
    //             setLoading(true);

    //             const response = await axios.get(`http://13.125.15.255:8080/api/articles?page=${page}`);
    //             setPage(page+1);
    //             console.log(response.data, "data");
    //             console.log(response.data.page+1)
    //             setApi(response.data.articleSummaryList);

    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchUsers();
    // }, []);
    // // console.log(api, "api");
    // if (!api) return null;
    // if (error) return <div>error</div>;
    // if (loading) return <div>spinner..</div>;

    return (
        <React.Fragment>

            <Body>
                <Card />
                <Button
                    margin="2em 5em 2em 35%"
                    width="30%"
                    _onClick={() => {
                        dispatch(newsActions.getArticleDB(paging.next));
                    }}
                >
                    더보기
                </Button>
            </Body>
        </React.Fragment>
    );
};

AllCardList.defaultProps = {
    createdAt: "2021-02-27 10:00:00",
    category: "카테고리",
    title: "제목",
    image: "이미지",
    contents: "내용",
    id: 0,
};

// const Body = styled.div`
//     padding: 0 5%;
// `;

export default AllCardList;
