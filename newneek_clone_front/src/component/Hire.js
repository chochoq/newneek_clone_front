// Hire.js
import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Button } from "../elements";

// 라우터
import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

const Hire = () => {
    return (
        <Center>
            <StyledLink href="www.notion.so/2021-9c2e445194794c879ff5af7378061b2a?utm_medium=web&utm_source=recruitment&utm_campaign=20210309">
                <P>🔥 뉴닉은 대규모 채용 중! 🔥</P>
                <P2>뉴닉의 도약을 함께할 새로운 동료를 찾습니다.</P2>
                <Button is_black width="134px" height="41px">
                    더 보기
                </Button>
            </StyledLink>
        </Center>
    );
};

const P = styled.p`
    size: 17px;
    font-weight: 700;
    color: #161616;
    margin: 0;
`;

const P2 = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #161616;
    margin: 10px;
`;

const Center = styled.div`
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding: 24px 55px 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

Hire.defaultProps = {};

export default Hire;
