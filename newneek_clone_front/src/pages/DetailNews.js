import React from "react";

// 페이지
import Main from "../pages/Main";
import CategoryNews from "../pages/CategoryNews";
import DetailNews from "../pages/DetailNews";
import Search from "../pages/Search";

import { Aside, Banner, Card, Category, Economy, Footer, Header, Hire } from "../component";

import { Button, Text } from "../elements/index";

// 라우터
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/configureStore";
import NewsHead from "../component/NewsHead";

const DetaillNews = () => {
    return (
        <React.Fragment>
            <Header />
            <Category />
            <Footer />
        </React.Fragment>
    );
};

export default DetaillNews;
