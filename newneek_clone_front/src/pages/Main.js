// Card.js
import React from "react";
import styled from "styled-components";

// 페이지
import AllCardList from "./AllCardList";
import { Aside, Banner, Root, Economy, Footer, Header, Hire } from "../component";
// 라우터
import { BrowserRouter } from "react-router-dom";

function Main(props) {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Hire />
                <Header />
                <Banner />
                <Root />
                <CategoryBody>
                    <AllCardList />
                </CategoryBody>

                <Economy is_main />
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

const CategoryBody = styled.div`
    margin: auto;
    padding: 0 10%;
`;

export default Main;
