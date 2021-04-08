import React, { useEffect, useState } from "react";
import "../shared/App.css";
import styled from "styled-components";

// 페이지
import AllCardList from "./AllCardList";
import Spinner from "../shared/Spinner";

import { Text, Button, Image } from "../elements/index";
import { Aside, Root, Footer, Header } from "../component";

// 라우터
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

const SearchNews = (props) => {
    const id = props.match.params.id;

    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async (param) => {
            try {
                setError(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get(
                    "http://13.125.15.255:8080/api/search?keywords=" + id
                );
                setApi(response.data.articleSummaryList);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    console.log(api);
    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <div>loading</div>;

    return (
        <BrowserRouter>
            <Header />
            <Root />
            <CategorySection>
                <CategoryBody>
                    <CategoryHead>
                        <Text size="1.75rem" medium>
                            <em>{id}</em>의 검색 결과에요.
                        </Text>
                        <Text size="1.1rem" medium>
                            🦔 고슴이: {api.length}개 찾았슴!
                        </Text>
                        <ButtonSection>
                            <Button width="80px" is_black>
                                최신순
                            </Button>
                            <Button width="80px" margin="0 0 0 -1px">
                                관련순
                            </Button>
                        </ButtonSection>
                    </CategoryHead>
                    <div className="posts-search">
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
                                              history.push(`/post/${article.id}`);
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
                </CategoryBody>
            </CategorySection>
            <Aside is_hover>
                오늘까지 <strong>368회</strong> 뉴스레터를 발행했고 <strong>305,408명</strong>이
                구독했어요!
            </Aside>
            <Footer />
        </BrowserRouter>
    );
};

const CategorySection = styled.div`
    margin-bottom: 6rem;
`;

const CategoryBody = styled.div`
    margin: auto;
    padding: 0 5%;
`;

const ButtonSection = styled.div`
    margin: 2rem 0 1rem;
`;

const CategoryHead = styled.div`
    margin: 4rem 0 2rem;
    width: 100%;
`;

const CardDiv = styled.div`
    box-sizing: border-box;
    grid-auto-rows: auto;
    position: relative;
    width: 25%;
    /* outline-color : 1px solid #161616; */
    color: #161616;
    border: 1px solid #161616;

    cursor: pointer;
    display: inline-block;
    margin: 0px;
    /* grid-template-columns: 1fr 1fr 1fr; */

    /* display: grid; */

    &:hover {
        background-color: #fff;
        color: #161616;
        border: 1px solid #161616;
    }
`;

const CardInner = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

const CardBody = styled.div`
    padding: 0rem 0.75rem;
    box-sizing: border-box;
    font-weight: normal;
`;

const CardText = styled.div`
    margin: 0 0 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    height: 3em;
    /* text-align: left; */
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const CardSmall = styled.div`
    font-size: 0.2rem;
`;

const CardDate = styled.div`
    bottom: 1.5rem;
    position: absolute;
`;

const CardCategory = styled.div`
    left: 5.3rem;
    bottom: 1.5rem;
    position: absolute;
`;

export default SearchNews;
