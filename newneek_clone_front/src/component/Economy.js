import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text } from "../elements/index";

import economy from "../shared/economy.png";

const Economy = (props) => {
    const { is_main } = props;
    return (
        <>
            {is_main ? (
                <a href="/class" style={{ textDecoration: "none" }}>
                    <EconomyBody>
                        <Figure>
                            <img src={economy} alt="economy" width="100%" />
                        </Figure>
                        <EconomyFooter>
                            <Text size="16px">고슴이는 경제초보에서 탈출할 수 있을까요?</Text>
                            <Arrow>
                                <Line className="arrow" />
                            </Arrow>
                        </EconomyFooter>
                    </EconomyBody>
                </a>
            ) : (
                <a href="/class" style={{ textDecoration: "none" }}>
                    <EconomyBodyNotMain>
                        <Figure>
                            <img src={economy} alt="economy" width="100%" />
                        </Figure>
                        <EconomyFooter>
                            <Text size="16px">고슴이는 경제초보에서 탈출할 수 있을까요?</Text>
                            <Arrow>
                                <Line className="arrow" />
                            </Arrow>
                        </EconomyFooter>
                    </EconomyBodyNotMain>
                </a>
            )}
        </>
    );
};

const EconomyBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 14rem 0 8rem;
    border-top: 2px solid #000;
    background: #fb7800;
    position: relative;
`;

const EconomyBodyNotMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-top: 2px solid #000;
    background: #fb7800;
    position: relative;
`;

const Figure = styled.div`
    display: block;
    max-width: 340px;
    margin-top: -6rem;
    margin-bottom: -3rem;
    cursor: pointer;
    &:hover {
        transform: translate(0, -8px);
        transition: all 0.4s ease 0.05s;
    }
    transform: translate(0, 8px);
    transition: all 0.4s ease 0.05s;
`;

const Arrow = styled.div`
    max-width: 67px;
    flex-grow: 1;
    margin-left: 11px;
    margin-right: 3px;
    padding: 17px 0;
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #000;
    position: relative;
`;

const EconomyFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.8rem 0;
    border-top: 1px solid #161616;
    border-bottom: 2px solid #000;
    background: #fff;
    position: relative;
`;

export default Economy;
