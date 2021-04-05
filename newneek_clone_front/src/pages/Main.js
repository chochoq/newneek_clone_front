// Main.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AllCardList from "./AllCardList";
import NewsHead from "../component/NewsHead";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Economy from "../component/Economy";
import Hire from "../component/Hire";
import Aside from "../component/Aside";

// 스타일
import { Grid } from "../elements";

const Main = (props) => {
    
    return (
        <React.Fragment>
            <Grid>
                <Hire/>
                <Header/>
                {/* <NewsHead/> */}
                <AllCardList />
                <Economy />
                <Aside/>
                <Footer/>

            </Grid>
        </React.Fragment>
    )
}

Main.defaultProps = {
    createdAt :"2021-02-27 10:00:00",
    category : "카테고리",
    title   : "제목",
    image   : "이미지",
    contents  : "내용",
    id : 0,
}

export default Main;