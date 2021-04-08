// AllCardList.js
import React, { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as newsActions } from "../redux/modules/news";

import { history } from "../redux/configureStore";

import Card from "../component/Card";
import { Button } from "../elements";

import styled from "styled-components";

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
    const dispatch = useDispatch();
    const page = Card.data;
    
    // console.log(page);
    // debugger;

    //       React.useEffect(() => {
    //     //  게시글이 12개 미만일 때는 article_summary_list를 호출해서 목록을 불러옵니다.
    //     if (article_summary_list.length < 12) {
    //       dispatch(article_summary_list.setArticleDB());
    //     }
    //   }, []);

    // console.log(page)

    return (
        <React.Fragment>
            <Body>
                <Card />
                <Button
                    margin="2em 5em 2em 35%"
                    width="30%"
                    _onClick={() => {
                        // console.log(page+1)
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

const Body = styled.div`
    padding: 0 5%;
`;

export default AllCardList;
