// Card.js

import React from "react";
import { Grid, Text, Button, Image } from "../elements";

// 뉴스레터 1개 뷰를 담당한다  article
// createdAt : 뉴스 생성일자 초까지
// category : 뉴스 카테고리
// title   : 뉴스 제목
// image   : 뉴스 이미지
// contents  : 뉴스 내용
// id : 뉴스 게시글 프라이머리키 


const Card = (props) => {

    return(
    <React.Fragment>
        <Grid>
                <div>img</div>
                <div>title</div>
                <div>createdAt</div>
                <div>contents</div>
                <div>category</div>
        </Grid>
    </React.Fragment>
    )
}


Card.defaultProps = {
    createdAt :"2021-02-27 10:00:00",
    category : "카테고리",
    title   : "제목",
    image   : "이미지",
    contents  : "내용",
    id : "뉴스게시글"
}

export default Card;


// 플렉스 스타트 넓이를 준것