import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../shared/App.css";

import { Button, Text, Image } from "../elements";

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

import axios from "axios";

// 컴포넌트
import { Aside, Card, Economy, Footer, Header } from "../component";

// 라우터
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import NewsHead from "../component/NewsHead";

const DetaillNews = (props) => {
    const id = props.match.params.id;

    const [api, setApi] = useState(null);
    const [rel, setRel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async (param) => {
            try {
                setError(null);
                setApi(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get("http://13.125.15.255:8080/api/articles/" + id);
                setApi(response.data);
                setRel(response.data.relativeArticleSummaryList);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <div>spinner..</div>;

    return (
        <React.Fragment>
            <Header />
            <Center>
                <Link
                    font-color="#FB7800"
                    size="1rem"
                    bold
                    is_underline
                    margin="0"
                    onClick={() => {
                        history.push(`/category/${api.article.categoryName}`);
                    }}
                >
                    {api.article.categoryName}
                </Link>
                <Text size="2.3rem" letterSpacing="`0.75rem" bold padding=".5rem 0 2rem">
                    {api.article.title}
                </Text>
                <Text size="1rem">{api.article.createdAt}</Text>
            </Center>
            <PostDetail>
                <div className="html">
                    <Text size="16px">
                        <div dangerouslySetInnerHTML={{ __html: api.article.contents }}></div>
                    </Text>
                </div>
            </PostDetail>
            <PostHash>
                <A>#{api.article.categoryName}</A>
                <A>#{api.article.title}</A>
            </PostHash>
            <PostFoot>
                <div className="flex">
                    <Text size="1.75rem" margin="0 12px 0 0">
                        🧡
                    </Text>
                    <Text margin="0 4px 0 0" bold color="rgb(153,153,153)">
                        좋았슴
                    </Text>
                    <Text bold>{id}</Text>
                </div>
                <div className="flex">
                    <div className="margin_left">
                        <svg viewBox="0 0 64 64" width="32" height="32">
                            <rect width="64" height="64" rx="0" ry="" fill="#3b5998"></rect>
                            <path
                                d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                fill="white"
                            ></path>
                        </svg>
                    </div>
                    <div className="margin_left">
                        <svg viewBox="0 0 64 64" width="32" height="32">
                            <rect width="64" height="64" rx="0" ry="" fill="#00aced"></rect>
                            <path
                                d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                fill="white"
                            ></path>
                        </svg>
                    </div>
                </div>
            </PostFoot>
            <PostRelative>
                <RelativeInner>
                    <RelativeHead>이런 이슈도 궁금하실 것 같아요</RelativeHead>
                    {rel.map((article) => [
                        <Link
                            onClick={() => {
                                history.push("/post/" + article.id);
                                console.log(article.id);
                            }}
                        >
                            <CardDiv>
                                <CardInner>
                                    <Image shape="rectangle" src={article.image} />
                                    <CardBody>
                                        <Text padding="0.5em 0em" size="1.25rem" bold>
                                            {article.title}
                                        </Text>
                                        <CardText>{article.contents}</CardText>
                                        <CardSmall>
                                            <CardDate>{article.createdAt}</CardDate>
                                            <CardCategory>{article.categoryName}</CardCategory>
                                        </CardSmall>
                                    </CardBody>
                                </CardInner>
                            </CardDiv>
                        </Link>,
                    ])}
                </RelativeInner>
            </PostRelative>
            <Economy />
            <Aside>
                오늘까지 <strong>368회</strong> 뉴스레터를 발행했고 <strong>305,408명</strong>이
                구독했어요!
            </Aside>
            <Footer />
        </React.Fragment>
    );
};

const Center = styled.div`
    text-align: center;
    padding: 40px 40px 60px;
    margin: 0 0 56px;
    border-bottom: 1px solid #161616;
    border-top: 1px solid #161616;
`;

const PostDetail = styled.div`
    max-width: 620px;
    margin: 0 auto;
    padding: 0 5% 8rem;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 2;
    position: relative;
`;

const PostHash = styled.div`
    display: flex;
    flex-wrap: flex;
    max-width: 640px;
    padding: 0 5%;
    margin: 0 auto 2.5rem;
`;

const A = styled.a`
    display: block;
    margin: 0 1rem 0.5rem 0;
    font-size: 0.87rem;
    text-decoration: none;
    cursor: pointer;
`;

const PostFoot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 640px;
    padding: 0 5%;
`;

const PostRelative = styled.div`
    width: 90%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 5%;
    position: relative;
    word-break: kepp-all;
`;

const RelativeInner = styled.div`
    margin: 6rem 0 16rem;
`;

const RelativeHead = styled.div`
    padding: 1.5rem 2rem;
    border: 1px solid #161616;
    font-size: 28px;
    font-weight: 500;
    box-sizing: border-box;
    position: relative;
    margin-bottom: -1px;
`;

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

export default DetaillNews;
