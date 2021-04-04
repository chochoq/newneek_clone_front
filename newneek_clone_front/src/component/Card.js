// Card.js
import React from "react";
import { Grid, Text, Image } from "../elements";

import { history } from "../redux/configureStore";

// 스타일
import styled from "styled-components";
import "../shared/App.css";


// mok api
// import Data from '../CardDate';

// 뉴스레터 1개 뷰를 담당한다  article
// createdAt : 뉴스 생성일자 초까지
// category : 뉴스 카테고리
// title   : 뉴스 제목
// image   : 뉴스 이미지
// contents  : 뉴스 내용
// id : 뉴스 게시글 프라이머리키 

const Card = (props) => {

    return (
        // todo 
        // 이미지없을 때 만들어야함, src={props.src}으로 변경해야 함, 온클릭시 기사로 넘어가기
        <CardDiv>
            <CardInner>
                <Image shape="rectangle" src='https://newneek.co/static/media/episode1.ed37b877.png' />
                <CardBody>
                    <Text padding="0.5em 0em" size="1.25rem" bold>{props.title}</Text>
                    <CardText>{props.contents}</CardText>
                    <CardDate>{props.createdAt}</CardDate>
                    <CardCategory>{props.category}</CardCategory>
                </CardBody>
            </CardInner>
        </CardDiv>

    )
}

const CardDiv = styled.div`
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 25%;
    color: #161616;
    border: 1px solid #161616;
    border-width: 0 1px 1px 1px;
    cursor: pointer;
    margin:0%;
    &:hover {
        background-color: #fff;
        color: #161616;
        border: 1px solid #161616;
    }
`;

const CardInner = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

const CardBody = styled.div`
    padding: 0rem 0.75rem;
    box-sizing: border-box;
`;

const CardText = styled.div`
    display: -webkit-box;
    margin: 0 0 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    height: 3.6em;
    font-size: 0.9rem;
    text-align: left;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    box-sizing: border-box;
`;

const CardDate = styled.div`
    position: absolute;
    bottom: 1.5rem;
    font-size: 0.5rem;
    box-sizing: border-box;
`;

const CardCategory = styled.div`
    position: absolute;
    left:5.3rem;
    bottom: 1.5rem;
    font-size: 0.5rem;
    box-sizing: border-box;
`;


Card.defaultProps = {
    createdAt :"2021-02-27 10:00:00",
    category : "카테고리",
    title   : "제목",
    image   : "https://newneek.co/static/media/episode1.ed37b877.png",
    contents  : "내용",
    id : 0,
}

export default Card;
