import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text } from "../elements";

import { history } from "../redux/configureStore";

const NewsHead = (props) => {
    const createdAt = props.article.createdAt;
    const date = createdAt.split(" ")[0].toString();

    return (
        <Center>
            <Text
                color="#FB7800"
                size="1rem"
                bold
                is_underline
                margin="0"
                _onClick={() => {
                    history.push(`/postDetail/${props.id}`);
                }}
            >
                {props.article.category}
            </Text>
            <Text size="2.3rem" letterSpacing="`0.75rem" bold padding="7px 0 28px">
                {props.article.title}
            </Text>
            <Text size="1rem">{date}</Text>
        </Center>
    );
};

const Center = styled.div`
    text-align: center;
    padding: 55px 55px 74px;
    margin: 0 0 56px;
    border-bottom: 1px solid #161616;
`;

NewsHead.defaultProps = {
    article: {
        id: "",
        category: "경제",
        title: "미국 경기 부양책 발표, 2260조 원짜리 부양책 💵",
        createdAt: "2021/04/02 10:10:00",
    },
};

export default NewsHead;
