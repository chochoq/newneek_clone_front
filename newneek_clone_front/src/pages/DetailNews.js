import React from "react";

import styled from "styled-components";

// 페이지
import Main from "../pages/Main";
import CategoryNews from "../pages/CategoryNews";
import DetailNews from "../pages/DetailNews";
import Search from "../pages/Search";

import { Aside, Banner, Card, Category, Economy, Footer, Header, Hire } from "../component";

import { Button, Text } from "../elements/index";

// 라우터
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/configureStore";
import NewsHead from "../component/NewsHead";

const DetaillNews = () => {
    return (
        <React.Fragment>
            <Header />
            <NewsHead />
            <PostDetail>
                <Text size="16px">
                    꽉 막혔던 수에즈 운하가 6일 만에 뚫렸어요. 하지만 진짜 싸움은 이제부터 시작일
                    거라고.
                    <h3>잠깐, 수에즈 운하 어땠더라?</h3>
                    3월 23일, 초대형 컨테이너선 ‘에버기븐호’가 수에즈 운하를 지나다
                    좌초됐는데요(지도). 하필 전 세계에서 가장 많은 배가 오고 가는 운하의 입구였어요.
                    300척이 넘는 배가 물건(원유부터 화장품까지)을 실은 채 오도 가도 못 하며 물류가
                    완전히 마비됐다고 🛑. 살아있는 동물을 실은 배도 있어 많은 생명이 위태로울
                    뻔했어요.
                    <h3>이제라도 뚫렸다니 다행이네</h3>배 무게를 줄이고, 물이 차오르는 때(=만조)를
                    기다리며 사고가 난 지 6일 만에 겨우 배를 끌어냈는데요(그래픽). 그사이 쌓인
                    피해가 너무 커서(약 1조 1300억 원), 이 피해를 누가 책임질 건지 얘기가 남았어요.
                    근데 이게 아주 복잡하다고:
                    <ul>
                        <li>
                            <strong>얽히고설킨 피해</strong> 🕸: ①뱃길에 막혀 얼음땡하던 배, ②수에즈
                            운하 대신 7~9일이 더 걸리는 아프리카 남쪽으로 돌아간 배, ③그 배에 있던
                            물건을 팔아야 했던 회사 등 이번 사고에 얽힌 피해자가 너무 많아요. 이들을
                            누가, 어떻게 보상할지 명확하지 않고요.
                        </li>
                        <li>
                            <strong>기승전 보험 싸움? 💸:</strong> 대부분 화물 회사는 이런 상황에
                            대비해 보험을 들어놓는데요. 각 회사가 보험회사에 보험금을 청구하면, 이
                            보험회사는 다시 에버기븐호 주인(=선주)에게 손실 보상을 요구할 수 있어요.
                            이때 선주 역시 가입해둔 보험사에 의존할 거고요. 이렇게 과정이 복잡해지면
                            보험금 지급까지 길게는 수년이 걸릴 수 있어요.
                        </li>
                        <li>
                            <strong>배 끌어내는 배 비용 🚢: </strong>꽉 막혀 있던 배를 끌어낸
                            업체(=구난업체)에도 누군가 비용을 내야 해요. 구난업체는 보통 배와 화물의
                            가치를 토대로 돈을 받는데, 이번 경우는 워낙 심각했던 일이라 수억 달러를
                            줘야 할 수 있다고.
                        </li>
                        <p>&nbsp;</p>
                    </ul>
                    에버기븐호의 주인은 일본 회사, 운송하는 회사(=선사)는 대만 회사인데요. 사고
                    원인이 무엇인지에 따라 누가 책임질지 정해질 것 같아요. 선원들은 ‘당시 바람이
                    너무 세서 통제할 수 없었어 🤷’라며 자연 때문이었다고 주장했는데, 수에즈 운하
                    관리청 측은 ‘기계 결함이나 사람 실수 때문인 것 같다’며 제대로 조사해보겠다고
                    했어요. 누가 책임질지는 조금 더 지켜봐야 할 것 같아요.
                </Text>
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
                    <Card />
                    <Card />
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
