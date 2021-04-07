import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";

// 컴포넌트
import { Aside, Card, Economy, Footer, Header } from "../component";

import { Button, Text } from "../elements/index";

// 라우터
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/configureStore";
import NewsHead from "../component/NewsHead";

const DetaillNews = () => {
    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setApi(null);
                setLoading(true);
                const response = await axios
                    .get
                    // "https://6068a5d60add49001734047c.mockapi.io/article"
                    ();
                console.log(response.data);
                setApi(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
        console.log(api);
    }, []);
    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <div>spinner..</div>;

    // const createdAt = props.article.createdAt;
    // const date = createdAt.split(" ")[0].toString();

    return (
        <React.Fragment>
            <Header />
            <NewsHead />
            <PostDetail>
                {api.map((article) => {
                    return (
                        <Text size="16px">
                            <div dangerouslySetInnerHTML={{ __html: article.contents }}></div>
                        </Text>
                    );
                })}
            </PostDetail>
            <PostHash>
                <A>#수에즈운하</A>
                <A>#국제외교</A>
                <A>#해상물류</A>
                <A>#물류</A>
                <A>#선박</A>
                <A>#보험</A>
                <A>#화물</A>
                <A>#이집트</A>
            </PostHash>
            <PostFoot>
                <Button />
                <Button />
            </PostFoot>
            <PostRelative>
                <RelativeInner>
                    <RelativeHead>이런 이슈도 궁금하실 것 같아요</RelativeHead>
                    <Card />
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
`;

export default DetaillNews;
