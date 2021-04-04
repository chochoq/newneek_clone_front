// CardList.js
import React,{ useEffect, useReducer, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";

// API
import axios from 'axios';
import { ApiConfig } from '../shared/ApiConfig';

import styled from "styled-components";

import { history } from "../redux/configureStore";

import Card from "../component/Card";
import { Grid, Text, Button, Image } from "../elements";

// mok api
// import Data from '../CardDate';

// 뉴스레터 1개 뷰를 담당한다  article
// createdAt : 뉴스 생성일자 초까지
// category : 뉴스 카테고리
// title   : 뉴스 제목
// image   : 뉴스 이미지
// contents  : 뉴스 내용
// id : 뉴스 게시글 프라이머리키 

const CardList = (props) => {

    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // api 받아오기
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get(
                    "https://606969750add490017340aba.mockapi.io/card/"
                );
                console.log(response.data);
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
        <React.Fragment>
            {/* todo 온클릭이벤트시 상세페이지로이동 */}
            <List
                onClick={() => {
                    // history.push(`/postDetail/${p.id}`);
                    }}
            >
                {api.map((CardList) => {
                    return <Card key={CardList.id} {...CardList} />;
                })}
                <Button margin="2rem auto">더보기</Button>
            </List>
            
        </React.Fragment>
    )
}

const List = styled.div`
    margin:auto;
    padding:0 10%;
`;
    

CardList.defaultProps = {
    createdAt :"2021-02-27 10:00:00",
    category : "카테고리",
    title   : "제목",
    image   : "이미지",
    contents  : "내용",
    id : 0,
}

export default CardList;