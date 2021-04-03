import React from 'react';

// 페이지
import Main from '../pages/Main';
import CategoryNews from '../pages/CategoryNews';
import DetailNews from '../pages/DetailNews';
import Search from '../pages/Search';


// 라우터
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/configureStore";




function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Main}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

