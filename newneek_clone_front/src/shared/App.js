import React from "react";

// 페이지
import Main from "../pages/Main";
import CategoryNews from "../pages/CategoryNews";
import DetailNews from "../pages/DetailNews";
import SearchNews from "../pages/SearchNews";
import Search from "../pages/Search";

// 라우터
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/configureStore";
import NewsHead from "../component/NewsHead";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ConnectedRouter history={history}>
                    <Route exact path="/" component={Main} />
                    <Route path="/category/:id" exact component={CategoryNews} />
                    <Route path="/search/post/:id" exact component={SearchNews} />
                    <Route path="/post/:id" exact component={DetailNews} />
                    <Route exact path="/search" component={Search} />
                </ConnectedRouter>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
