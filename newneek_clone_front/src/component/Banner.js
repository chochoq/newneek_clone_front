import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text, Input, Button } from "../elements/index";
import banner from "../shared/banner.png";

const Banner = () => {
    return (
        <Intro>
            <IntroImageBody>
                <img src={banner} alt="intro" width="480px" />
            </IntroImageBody>
            <IntroHead>
                <IntroHeadContent>특보!🗞️우리가 시간이 없지, 세상이 안 궁금하냐!</IntroHeadContent>
            </IntroHead>

            <IntroBody>
                <IntroInner>
                    <Text size="16px" margin="0 0 15px">
                        ✨지금 <strong>305,408명</strong>이 뉴닉을 읽고 있어요.
                    </Text>
                    <Text size="16px" margin="0 0 20px">
                        세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은
                        아니잖아요! <br />
                        월/수/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
                    </Text>
                    <Input placeholder="이메일 주소" />
                    <Input placeholder="닉네임" />
                    <Text>
                        <Input is_check />
                        <strong>
                            <u>개인정보 수집·이용</u>
                        </strong>
                        에 동의합니다
                    </Text>
                    <Button is_black padding="1rem 0" width="195px">
                        뉴스레터 무료로 구독하기
                    </Button>
                </IntroInner>
            </IntroBody>
        </Intro>
    );
};

const Intro = styled.div`
    position: relative;
`;

const IntroImageBody = styled.div`
    position: absolute;
    top: 5rem;
    left: 50%;
    width: 100%;
    max-width: 480px;
    margin-left: 60px;
`;

const IntroHead = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid #000;
    font-size: 42px;
    font-weight: 700;
    letter-spacing: -0.025rem;
`;

const IntroHeadContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
`;

const IntroBody = styled.div`
    padding: 2rem 0 3rem;
    background: #fb7800;
    box-sizing: border-bos;
`;

const IntroInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
`;

export default Banner;
