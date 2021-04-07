// Card.js
import React, { useEffect, useState } from "react";
import { Text, Image } from "../elements";

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

// 스타일
import styled from "styled-components";
import "../shared/App.css";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { initial } from "lodash";

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
    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async (param) => {
            try {
                setError(null);
                setApi(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get("http://13.125.15.255:8080/api/articles");
                console.log(response.data, "data");
                setApi(response.data.articleSummaryList);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    console.log(api, "api");
    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <div>spinner..</div>;

    return (
        <>
            {api.map((article) => [
                <Link
                    onClick={() => {
                        history.push("/post/" + article.id);
                    }}
                >
                    <CardDiv>
                        <CardInner>
                            <Image shape="rectangle" src={article.image} />
                            <CardBody>
                                <Text padding="0.5em 0em" size="1.25rem" bold>
                                    {article.title}
                                </Text>
                                <CardText>{api.contents}</CardText>
                                <CardSmall>
                                    <CardDate>{article.createdAt}</CardDate>
                                    <CardCategory>{article.categoryName}</CardCategory>
                                </CardSmall>
                            </CardBody>
                        </CardInner>
                    </CardDiv>
                </Link>,
            ])}
        </>
    );
};

// todo
//  카드에 top 부분에 마진인지 뭔지가 들어가서 카드가 띄어져있음. 해결요망
const CardDiv = styled.div`
    box-sizing: border-box;
    grid-auto-rows: auto;
    position: relative;
    width: 25%;
    /* outline-color : 1px solid #161616; */
    color: #161616;
    border: 1px solid #161616;

    cursor: pointer;
    display: inline-block;
    margin: 0px;
    /* grid-template-columns: 1fr 1fr 1fr; */

    /* display: grid; */

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
    font-weight: normal;
`;

const CardText = styled.div`
    margin: 0 0 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    height: 3em;
    /* text-align: left; */
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const CardSmall = styled.div`
    font-size: 0.2rem;
`;

const CardDate = styled.div`
    bottom: 1.5rem;
    position: absolute;
`;

const CardCategory = styled.div`
    left: 5.3rem;
    bottom: 1.5rem;
    position: absolute;
`;

Card.defaultProps = {
    createdAt: "2021-02-27 10:00:00",
    category: "카테고리",
    title: "제목",
    image: "https://newneek.co/static/media/episode1.ed37b877.png",
    contents: "내용",
    id: 0,
};

export default Card;
