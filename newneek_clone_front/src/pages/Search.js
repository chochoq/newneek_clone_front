import React from "react";
import "../shared/App.css";
import styled from "styled-components";

import { NavLink, Switch, Route, HashRouter } from "react-router-dom";

import { Button, Input, Text } from "../elements/index";

const Search = () => {
    return (
        <SearchBody>
            <Input is_search placeholder="고슴아 이게 궁금해. (인물, 이슈)" />
            <SearchOption>
                <Text bold margin=".8rem 0" size="1.2rem">
                    고슴이 추천 키워드
                </Text>
                <A>코로나19 백신</A>
                <A>클럽하우스</A>
                <A>저출생</A>
                <A>부동산 정책</A>
                <A>바이든</A>
            </SearchOption>
        </SearchBody>
    );
};

const SearchBody = styled.div`
    max-width: 640px;
    margin: 0 auto;
    padding: 1rem 5%;
    display: block;
`;

const SearchOption = styled.div`
    padding: 2rem 0 3rem;
`;

const A = styled.a`
    cursor: pointer;
    font-size: 14px;
    display: block;
    margin: 0.8rem 0;
    text-decoration: none;
`;

export default Search;
