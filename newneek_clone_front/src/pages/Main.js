import React from "react";

// 페이지
import Main from "./Main";
import CategoryNews from "./CategoryNews";
import DetailNews from "./DetailNews";
import Search from "./Search";
import AllCardList from "./AllCardList";

import { Aside, Banner, Card, Category, Economy, Footer, Header, Hire } from "../component";

import { Button, Text } from "../elements/index";

// 라우터
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/configureStore";
import NewsHead from "../component/NewsHead";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Hire />
                <Header />
                <Banner />
                <Category />
                <div>
                    <AllCardList/>
                </div>
                {/* <Button padding="14px 30px 14px">
                    <Text size="15px">더보기</Text>
                </Button> */}
                {/* <NewsHead /> */}
                <Economy />
                <Aside>퀴어 프렌들리한 팀을 위한 뉴닉 레인보우 가이드</Aside>
                <Aside>3월 8일에 업데이트된 뉴닉의 여성용어 가이드</Aside>
                <Aside is_hover>
                    오늘까지 <strong>368회</strong> 뉴스레터를 발행했고 <strong>305,408명</strong>이
                    구독했어요!
                </Aside>
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
