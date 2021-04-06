import React from "react";
import "../shared/App.css";
import styled from "styled-components";

// 페이지
import AllCardList from "./AllCardList";

import { Text } from "../elements/index";
import { Aside, Category, Footer, Header } from "../component";

// 라우터
import { BrowserRouter } from "react-router-dom";

const CategoryNews = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Category />
                <CategorySection>
                    <CategoryBody>
                        <CategoryHead>
                            <Text size="1.75rem" medium>
                                🖐️ 5분뉴닉
                            </Text>
                        </CategoryHead>
                    </CategoryBody>
                    <AllCardList></AllCardList>
                </CategorySection>
                <Aside is_hover>
                    오늘까지 <strong>368회</strong> 뉴스레터를 발행했고 <strong>305,408명</strong>이
                    구독했어요!
                </Aside>
                <Footer />
            </BrowserRouter>
        </>
    );
};

const CategorySection = styled.div`
    margin-bottom: 6rem;
`;

const CategoryBody = styled.div`
    margin: auto;
    padding: 0 18%;
`;

const CategoryHead = styled.div`
    margin: 4rem 0 2rem;
    width: 100%;
`;

export default CategoryNews;
