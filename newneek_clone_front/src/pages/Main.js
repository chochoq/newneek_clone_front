// Card.js
import React, { useEffect, useState } from "react";
import { Image } from "../elements";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

// 페이지
import AllCardList from "./AllCardList";
import Button from "../elements/Button";
// 스피너
import Spinner from "../shared/Spinner";
import axios from "axios";
import { Aside, Banner, Root, Economy, Footer, Header, Hire, Card } from "../component";
// 라우터
import { BrowserRouter } from "react-router-dom";

function Main(props) {
    const [api, setApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get("http://13.125.15.255:8080/api/articles?page=0");
                setApi(response.data.articleSummaryList);
                setPage(page + 1);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <Spinner />;

    const Plus = async () => {
        let response;
        try {
            setError(null);
            setApi(null);
            setLoading(true);
            response = await axios.get(`http://13.125.15.255:8080/api/articles?page=${page}`);
        } catch (e) {
            setError(e);
        } finally {
            setApi(api.concat(response.data.articleSummaryList));
            setPage(page + 1);
        }
        setLoading(false);
    };

    return (
        <React.Fragment>
            <BrowserRouter>
                <Hire />
                <Header />
                <Banner />
                <Root />

                <CategoryBody>
                    <div className="posts">
                        {api.map((article) =>
                            article.image === ""
                                ? [
                                      <Link
                                          key={article.id}
                                          to={`/post/${article.id}`}
                                          onClick={() => {
                                              history.push(`/post/${article.id}`);
                                          }}
                                          className="card noimage"
                                      >
                                          <div className="card-inner">
                                              <div className="card-body">
                                                  <span className="card-emoji">
                                                      {article.categoryName === "코로나19"
                                                          ? "😷 "
                                                          : article.categoryName === "5분뉴닉"
                                                          ? "🖐️ "
                                                          : article.categoryName === "국내정치"
                                                          ? "⚖️ "
                                                          : article.categoryName === "국제·외교"
                                                          ? "🌐 "
                                                          : article.categoryName === "경제"
                                                          ? "💰 "
                                                          : article.categoryName === "노동·일"
                                                          ? "💪 "
                                                          : article.categoryName === "인권"
                                                          ? "🤝 "
                                                          : article.categoryName === "테크"
                                                          ? "🤖 "
                                                          : article.categoryName === "문화"
                                                          ? "🧸 "
                                                          : article.categoryName === "환경·에너지"
                                                          ? "🌳 "
                                                          : null}
                                                  </span>
                                                  <h3 className="card-title">{article.title}</h3>
                                                  <p class="card-text">{article.contents}</p>

                                                  <time className="card-date">
                                                      {article.createdAt}
                                                  </time>
                                                  <i className="card-category">
                                                      {article.categoryName}
                                                  </i>
                                              </div>
                                          </div>
                                      </Link>,
                                  ]
                                : [
                                      <Link
                                          key={article.id}
                                          to={`/post/${article.id}`}
                                          onClick={() => {
                                              window.location.reload();
                                          }}
                                          className="card"
                                      >
                                          <div className="card-inner">
                                              <figure className="card-thumbnail">
                                                  <Image
                                                      shape="rectangle"
                                                      src={article.image}
                                                      alt="article"
                                                  />
                                              </figure>
                                              <div className="card-body">
                                                  <h3 className="card-title">{article.title}</h3>
                                                  <time className="card-date">
                                                      {article.createdAt}
                                                  </time>
                                                  <i className="card-category">
                                                      {article.categoryName}
                                                  </i>
                                              </div>
                                          </div>
                                      </Link>,
                                  ]
                        )}
                    </div>
                    <button className="loadmore secondary-button" onClick={Plus}>
                        더보기
                    </button>
                </CategoryBody>

                <Economy is_main />
                <Aside>퀴어 프렌들리한 팀을 위한 뉴닉 레인보우 가이드</Aside>
                <Aside>3월 8일에 업데이트된 뉴닉의 여성용어 가이드</Aside>
                <Aside is_hover>
                    오늘까지 <strong>368회</strong> 뉴스레터를 발행했고 <strong>305,408명</strong>이
                    구독했어요!
                </Aside>
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    );
}

// const Paging = (props) => {
//     console.log(props);
//     // const [api, setApi] = useState(null);;
//     // const [page, setPage] = useState(0);

//     // useEffect(() => {
//     //     const fetchUsers = async () => {
//     //             setApi(null);
//     //             const response = await axios.get("http://13.125.15.255:8080/api/articles?page=0");
//     //             setApi(response.data.articleSummaryList);
//     //             setPage(page + 1);
//     //         }
//     //     fetchUsers();
//     // }, []);
//     // if (!api) return null;

//     return <Main />;
// };

const CategoryBody = styled.div`
    margin: auto;
    padding: 0 10%;
`;

export default Main;
