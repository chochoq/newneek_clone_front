import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { history } from "../redux/configureStore";

import { Input, Text } from "../elements/index";

const Search = (props) => {
    const [text, setText] = React.useState("");

    const write = () => {
        if (text === "") {
            window.alert("댓글을 입력해주세요!");
            return;
        }
        setText("");
        history.push(`/search/post/${text}`);
    };

    return (
        <SearchBody>
            <Input
                type="text"
                is_search
                placeholder="고슴아 이게 궁금해. (인물, 이슈)"
                value={text}
                _onChange={(e) => {
                    setText(e.target.value);
                }}
                onSubmit={write}
            />
            <SearchOption>
                <Text bold margin=".8rem 0" size="1.1rem">
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
    box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 6;
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

Search.defaultProps = {
    id: "",
};

export default Search;
