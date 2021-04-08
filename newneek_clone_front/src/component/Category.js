import React, { useEffect, useState } from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text } from "../elements/index";
import { Economy, Hire } from "./index";

import axios from "axios";
import { NavLink, Switch, Route, HashRouter } from "react-router-dom";
import { history } from "../redux/configureStore";

const Category = (props) => {
    // const [api, setApi] = useState(null);
    // const [category, setCategory] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             setError(null);
    //             setApi(null);
    //             setLoading(true);
    //             const response = await axios.get("http://13.125.15.255:8080/api/articles");
    //             setApi(response.data.articleSummaryList);
    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchUsers();
    //     console.log(api);
    // }, []);
    // console.log(api, "category");
    // if (!api) return null;
    // if (error) return <div>error</div>;
    // if (loading) return <div>spinner..</div>;

    return (
        <div className="hover">
            <CategoryBody>
                <CategoryInner>
                    <NavLink
                        exact
                        to="/"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            {" "}
                            전체
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/5분뉴닉"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            🖐️ 5분뉴닉
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/국내정치"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            국내정치
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/국제·외교"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            국제·외교
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/경제"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            경제
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/노동·일"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            노동·일
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/인권"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            인권
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/테크"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                        className="hover"
                    >
                        <Text size="16px" medium className="hover">
                            테크
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/문화"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            문화
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/환경·에너지"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            환경·에너지
                        </Text>
                    </NavLink>
                    <NavLink
                        to="/category/코로나19"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px" medium>
                            코로나19
                        </Text>
                    </NavLink>
                </CategoryInner>
            </CategoryBody>
        </div>
    );
};

const Root = () => {
    useEffect(() => {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    return (
        <>
            <div id="myHeader" className="header">
                <Category />
            </div>
        </>
    );
};

const CategoryBody = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #161616;
    border-top: 1px solid #161616;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
    height: 70px;
    left: 0;
    right: 0;
`;

const CategoryInner = styled.div`
    display: flex;
    overflow: auto;
    white-space: nowrap;
    overflow: overlay;
`;

const A = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    padding: 1.25rem 0;
    box-sizing: border-box;
    color: #161616;
    cursor: pointer;
`;

export default Root;
