import React from "react";
import "../shared/App.css";
import styled from "styled-components";

// 페이지
import AllCardList from "./AllCardList";

import { Text, Button } from "../elements/index";
import { Aside, Root, Footer, Header } from "../component";

// 라우터
import { BrowserRouter } from "react-router-dom";

const SearchNews = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Root />
                <CategorySection>
                    <CategoryBody>
                        <CategoryHead>
                            <Text size="1.75rem" medium>
                                <em>클럽하우스</em>의 검색 결과에요.
                            </Text>
                            <Text size="1.1rem" medium>
                                🦔 고슴이: 1개 찾았슴!
                            </Text>
                            <ButtonSection>
                                <Button width="80px" is_black>
                                    최신순
                                </Button>
                                <Button width="80px" margin="0 0 0 -1px">
                                    관련순
                                </Button>
                            </ButtonSection>
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

const ButtonSection = styled.div`
    margin: 2rem 0 1rem;
`;

const CategoryHead = styled.div`
    margin: 4rem 0 2rem;
    width: 100%;
`;

export default SearchNews;
