import React, { useEffect, useState } from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text } from "../elements/index";

import axios from "axios";

import { history } from "../redux/configureStore";

const NewsHead = () => {
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
                    "https://6068a5d60add49001734047c.mockapi.io/article"
                );
                setApi(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <div>spinner..</div>;

    // const createdAt = props.article.createdAt;
    // const date = createdAt.split(" ")[0].toString();

    return (
        <>
            {api.map((article) => (
                <Center>
                    <Text
                        color="#FB7800"
                        size="1rem"
                        bold
                        is_underline
                        margin="0"
                        _onClick={() => {
                            history.push(`/postDetail/${article.id}`);
                        }}
                    >
                        {article.category}
                    </Text>
                    <Text size="2.3rem" letterSpacing="`0.75rem" bold padding=".5rem 0 2rem">
                        {article.title}
                    </Text>
                    <Text size="1rem">{article.createdAt}</Text>
                </Center>
            ))}
        </>
    );
};

const Center = styled.div`
    text-align: center;
    padding: 40px 40px 60px;
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
