import React from "react";

// 페이지
import Main from "../pages/Main";
import CategoryNews from "../pages/CategoryNews";
import DetailNews from "../pages/DetailNews";
import SearchNews from "../pages/SearchNews";
import Search from "../pages/Search";

// 라우터
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/configureStore";
import NewsHead from "../component/NewsHead";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ConnectedRouter history={history}>
                    <Route path="/" exact component={Main} />
                    <Route path="/:category?" exact component={CategoryNews} />
                    <Route path="/search/post" exact component={SearchNews} />
                    <Route path="/post/:id" exact component={DetailNews} />
                    <Route path="/search" exact component={Search} />
                </ConnectedRouter>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
