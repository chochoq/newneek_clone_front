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
                <IntroHeadContent>
                    νΉλ³΄! ποΈ μ°λ¦¬κ° μκ°μ΄ μμ§, μΈμμ΄ μ κΆκΈνλ!
                </IntroHeadContent>
            </IntroHead>

            <IntroBody>
                <IntroInner>
                    <Text size="16px">
                        π μ§κΈ κ΅¬λνλ©΄ <strong>λ΄μΌ μμΉ¨</strong>μ μ½μ μ μμ΄μ!{" "}
                    </Text>
                    <Text size="16px" margin="0 0 15px">
                        β¨ μ§κΈ <strong>305,408λͺ</strong>μ΄ λ΄λμ μ½κ³  μμ΄μ.
                    </Text>
                    <Text size="16px" margin="0 0 20px">
                        μΈμ λμκ°λ μμ, μκ³ λ μΆμ§λ§ μ λ¬Έ λ³Ό μ μμ΄ λ°μ κ² μ°λ¦¬ νμ
                        μλμμμ! <br />
                        μ/μ/κΈ μμΉ¨λ§λ€ μΈμ λμκ°λ μμμ λ©μΌλ‘ λ°μλ³΄μΈμ.
                    </Text>
                    <Input placeholder="μ΄λ©μΌ μ£Όμ" />
                    <Input placeholder="λλ€μ" />
                    <Text margin="0 0 20px">
                        <Input is_check />
                        <strong>
                            <u>κ°μΈμ λ³΄ μμ§Β·μ΄μ©</u>
                        </strong>
                        μ λμν©λλ€
                    </Text>
                    <Button is_black padding="1rem 0" width="195px">
                        λ΄μ€λ ν° λ¬΄λ£λ‘ κ΅¬λνκΈ°
                    </Button>
                </IntroInner>
            </IntroBody>
        </Intro>
    );
};

const Intro = styled.div`
    position: relative;
    border-top: 1px solid #161616;
`;

const IntroImageBody = styled.div`
    position: absolute;
    top: 5rem;
    left: 50%;
    width: 100%;
    max-width: 480px;
    margin-left: 60px;
    z-index: 0;
`;

const IntroHead = styled.div`
    padding: 0.5rem 0;
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
    box-sizing: border-box;
`;

const IntroInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
`;

export default Banner;
