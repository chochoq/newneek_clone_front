import React, { useState } from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text, Input, Button } from "../elements/index";
import { NavLink, Link } from "react-router-dom";

const Aside = (props) => {
    const { text, children, is_hover } = props;
    const [hoverd, setHoverd] = useState(false);
    const asideHover = () => setHoverd(!hoverd);

    return (
        <>
            {is_hover ? (
                <AsideBody>
                    <A
                        className={hoverd ? "pulse marque" : ""}
                        onMouseLeave={asideHover}
                        onMouseOver={asideHover}
                    >
                        <Text size="21px">하이</Text>
                        <ArrowBody>
                            <Line className="arrow" />
                        </ArrowBody>
                    </A>
                </AsideBody>
            ) : (
                <AsideBody>
                    <A>
                        <Text size="21px">{text ? text : children}</Text>
                        <ArrowBody>
                            <Line className="arrow" />
                        </ArrowBody>
                    </A>
                </AsideBody>
            )}

            {/* <div className="pulse marque">
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
                <p>뉴스레터 구독하기</p>
            </div>*/}
        </>
    );
};

Aside.defaultProps = {
    text: false,
};

const AsideBody = styled.div`
    padding: 1.1rem 5%;
    border-top: 1px solid #161616;

    &: hover {
        background-color: #fff;
    }
`;

const A = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1360px;
    width: 100%;
`;

const ArrowBody = styled.div`
    max-width: 67px;
    flex-grow: 1;
    margin-left: 11px;
    margin-reight: 3px;
    padding: 17px 0;
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #000;
    position: relative;
`;

export default Aside;
