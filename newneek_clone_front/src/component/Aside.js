import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text, Input, Button } from "../elements/index";

const Aside = (props) => {
    const { text, children } = props;

    return (
        <>
            <AsideBody>
                <A>
                    <Text size="1.15rem">{text ? text : children}</Text>
                    <ArrowBody>
                        <Line className="arrow" />
                    </ArrowBody>
                </A>
            </AsideBody>
        </>
    );
};

Aside.defaultProps = {
    text: false,
};

const AsideBody = styled.div`
    padding: 1.25rem 5%;
    border-top: 1px solid #161616;
`;

const A = styled.a`
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
