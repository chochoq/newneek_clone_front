import React from "react";
import "../shared/App.css";
import styled from "styled-components";

import logo from "../shared/logo.png";

const Footer = () => {
    return (
        <FooterBody>
            <FooterSitemapItem>
                <img src={logo} alt="logo" width="200px" />
                <FooterSlogan bold size="1.1rem" margin="1rem 0 3rem" line-height="1.6">
                    뉴닉은 <br />
                    힙, 재미, 진정성을 추구합니다.
                </FooterSlogan>
            </FooterSitemapItem>
            <FooterSitemap>
                <FooterSitemapItem>
                    <SiteButton>뉴닉탄생기</SiteButton>
                    <SiteButton>고객센터</SiteButton>
                    <SiteButton>고슴이와친구들</SiteButton>
                </FooterSitemapItem>
                <FooterSitemapItem>
                    <SiteButton>인스타그램</SiteButton>
                    <SiteButton>고슴책</SiteButton>
                    <SiteButton>2020 총선</SiteButton>
                </FooterSitemapItem>
                <FooterSitemapItem>
                    <SiteButton>서비스 이용약관 </SiteButton>
                    <SiteButton>
                        <strong>개인정보처리방침</strong>
                    </SiteButton>
                </FooterSitemapItem>
            </FooterSitemap>

            <FooterAddress>
                <FooterAddressText>
                    ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 /
                    통신판매번호: 2020-서울마포-2938 / 개인정보보호책임자: 빈다은 / 담당자메일주소:
                    whatsup@newneek.co <br />
                    서울특별시 마포구 잔다리로 62-1, 2층 (04031) <br />
                    근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!
                </FooterAddressText>
                <FooterAddressText>
                    <small>ⓒ NEWNEEK Co., Ltd. 2018-2020.</small>
                </FooterAddressText>
            </FooterAddress>
        </FooterBody>
    );
};

const FooterBody = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 0 auto;
    padding: 4rem 5% 6rem;
    background: #ebebeb;
    border-top: 1px solid #161616;
    box-sizing: border-box;
    z-index: 4;
`;

const FooterSitemap = styled.div`
    display: block;
    display: flex;
    float: none;
    width: 50%;
    margin-bottom: 3rem;
`;

const FooterSitemapItem = styled.div`
    width: 50%;
    float: left;
`;

const FooterSlogan = styled.p`
    width: 50%;
    margin: 1.5rem 0 3rem;
    font-size: 1.15rem;
    line-height: 1.6;
    font-weight: 600;
    word-break: keep-all;
`;

const SiteButton = styled.a`
    href: https://www.notion.so/2021-9c2e445194794c879ff5af7378061b2a;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0.75rem;
    text-decoration:none;
    color: #161616;
    &: hover {
        color: #fb7800;
        cursor: pointer;
    }
    
`;

const FooterAddress = styled.div`
    width: 100%;
    margin: 1rem 0 0;
`;

const FooterAddressText = styled.p`
    font-size: 0.9rem;
    line-height: 1.8;
    font-weight: 400;
    word-break: keep-all;
`;

export default Footer;
