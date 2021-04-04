import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Button } from "../elements";

import logo from "../shared/logo.png";

import { history } from "../redux/configureStore";

const Header = () => {
    return (
        <>
            <NavBarTop className="navbar-top"></NavBarTop>

            <NavBar>
                <NavBarInner>
                    <NavBarMenu>
                        <HeadButton>💰경제기본기</HeadButton>

                        <HeadButton>🌹여성의 날</HeadButton>
                    </NavBarMenu>
                    <NavBarLogo
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        <img src={logo} alt="logo" width="220px" />
                    </NavBarLogo>
                    <NavBarMenu>
                        <Button
                            is_header
                            onClick={() => {
                                history.push("/search");
                            }}
                        >
                            <i className="icon-search"></i>
                        </Button>
                        <Button is_header>
                            <ImojiButton>🦔</ImojiButton>
                        </Button>
                    </NavBarMenu>
                </NavBarInner>
            </NavBar>
        </>
    );
};

const NavBarTop = styled.div`
    height: 30px;
    background: #fff;
    position: relative;
`;

const NavBar = styled.nav`
    border-bottom: 1px solid #161616;
    position: relative;
    z-index: 4;
`;

const NavBarInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1360px;
    margin: 0 auto;
    padding: 42px 56px 35px;
`;

const NavBarMenu = styled.div`
    display: flex;
`;

const NavBarLogo = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    width: 220px;
    cursor: pointer;
    transform: translateX(-15%);
`;

const HeadButton = styled.a`
    font-size: 16px;
    margin-right: 21px;
    &: hover {
        color: #fb7800;
        cursor: pointer;
    }
`;

const ImojiButton = styled.span`
    font-size: 1.75rem;
    margin: 0;
`;

Header.defaultProps = {};

export default Header;
