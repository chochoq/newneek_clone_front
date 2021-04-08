// Card.js
import React, { useEffect, useState } from "react";
import { Text, Image } from "../elements";

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

// 스타일
import styled from "styled-components";
import "../shared/App.css";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { initial } from "lodash";

// mok api
// import Data from '../CardDate';

// 뉴스레터 1개 뷰를 담당한다  article
// createdAt : 뉴스 생성일자 초까지
// category : 뉴스 카테고리
// title   : 뉴스 제목
// image   : 뉴스 이미지
// contents  : 뉴스 내용
// id : 뉴스 게시글 프라이머리키

const Card = () => {
    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchUsers = async (param) => {

            try {
                setError(null);
                setApi(null);
                setLoading(true);

                const response = await axios.get(`http://13.125.15.255:8080/api/articles?page=${page}`);
                setPage(page+1);
                console.log(response.data, "data");
                console.log(response.data.page)
                setApi(response.data.articleSummaryList);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    // console.log(api, "api");
    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <div>spinner..</div>;

    return (
        <>
            <React.Fragment>
                <Wrap>
                    <CardDiv>
                            <CardInner>
                                <CardBody1>
                                    <CardHeader>
                                        <span >💰</span>
                                        <p padding="0.5em 0em" size="1.25rem" bold>
                                            안녕하세요오옹오옹
                                        </p>
                                        <p>안녕하세요옹오옹오오</p>
                                    </CardHeader>
                                    <CardFooter>
                                        <p>2021/04/04   경제</p>
                                    </CardFooter>
                                </CardBody1>
                            </CardInner> 

                        </CardDiv>
                    </Wrap>
            </React.Fragment>
    </>
    )
}

const CardHeader = styled.div`
    padding: 20px 24px;
    
`;

const CardFooter = styled.div`
    size: 10px;
    padding: 10px 24px;
    
`;

const ImageBox = styled.div`
    width: 100%;
    height: 260px;
    background-image: url("data:image/jpeg;base64,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");
    background-size: cover;
    background-position: center;
    box-shadow:
        1px 0 0 0 #161616, 
        0 1px 0 0 #161616, 
        1px 1px 0 0 #161616,
        1px 0 0 0 #161616 inset, 
        0 1px 0 0 #161616 inset;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Wrap = styled.div`
    width: 10%;
    margin: 0 auto;
    // border: solid 1px #212121;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
    
`;


const CardDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    flex-wrap: wrap;
    margin: 0px auto;
`;

const CardInner = styled.div`
    display: flex;
    height: 350px;
    width: 350px;
    background-color: #fff;
    // border: solid 1px #161616;
    box-shadow:
        1px 0 0 0 #161616, 
        0 1px 0 0 #161616, 
        1px 1px 0 0 #161616,
        1px 0 0 0 #161616 inset, 
        0 1px 0 0 #161616 inset;
    
`;

const CardBody1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

`;

const CardBody2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

`;



export default Card;
