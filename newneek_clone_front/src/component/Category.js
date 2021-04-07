import React, { useEffect, useState } from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text } from "../elements/index";
import { Economy, Hire } from "./index";

import axios from "axios";
import { NavLink, Switch, Route, HashRouter } from "react-router-dom";
import { history } from "../redux/configureStore";

const Category = () => {
    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get(
                    "https://6068a5d60add49001734047c.mockapi.io/category"
                );
                setApi(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
        console.log(api);
    }, []);

    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <div>spinner..</div>;

    return (
        <div>
            <CategoryBody>
                <CategoryInner>
                    <NavLink
                        to="/"
                        style={{ textDecoration: "none" }}
                        component={A}
                        activeClassName="is_active"
                    >
                        <Text size="16px"> 전체</Text>
                    </NavLink>
                    {api &&
                        api.map((e) => (
                            <NavLink
                                key={e.categoryName}
                                exact={e.categoryName === "all"}
                                to={e.categoryName === "all" ? "/" : `${e.categoryName}`}
                                style={{ textDecoration: "none" }}
                                component={A}
                                activeClassName="is_active"
                            >
                                <Text size="16px">{e.categoryName}</Text>
                            </NavLink>
                        ))}
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
