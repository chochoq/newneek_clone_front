import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import News from "./modules/news";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    news: News,
    router : connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history:history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

// redux devTools 설정
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;


// 미들웨어 묶어주기
const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
);


// 미들웨어와 루트리듀서를 묶어서 스토어를 만든다
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
