import React, { useEffect, useState } from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Text } from "../elements/index";

import axios from "axios";

import { history } from "../redux/configureStore";

const NewsHead = (props) => {
    const id = props.match.params.id;

    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async (param) => {
            try {
                setError(null);
                setApi(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get("http://13.125.15.255:8080/api/articles/" + id);
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

    return (
        <>
            <Center>
                <Text
                    color="#FB7800"
                    size="1rem"
                    bold
                    is_underline
                    margin="0"
                    _onClick={() => {
                        history.push(`/category/${api.id}`);
                    }}
                >
                    {api.categoryName}
                </Text>
                <Text size="2.3rem" letterSpacing="`0.75rem" bold padding=".5rem 0 2rem">
                    {api.title}
                </Text>
                <Text size="1rem">{api.createdAt}</Text>
            </Center>
        </>
    );
};

const Center = styled.div`
    text-align: center;
    padding: 40px 40px 60px;
    margin: 0 0 56px;
    border-bottom: 1px solid #161616;
    border-top: 1px solid #161616;
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
