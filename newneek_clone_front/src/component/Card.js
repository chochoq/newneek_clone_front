// Card.js
import React, { useEffect, useState } from "react";
import { Image } from "../elements";

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

// 스타일
import styled from "styled-components";
import "../shared/App.css";

import axios from "axios";

// mok api
// import Data from '../CardDate';

// 뉴스레터 1개 뷰를 담당한다  article
// createdAt : 뉴스 생성일자 초까지
// category : 뉴스 카테고리
// title   : 뉴스 제목
// image   : 뉴스 이미지
// contents  : 뉴스 내용
// id : 뉴스 게시글 프라이머리키

const Card = (props) => {
    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get("http://13.125.15.255:8080/api/articles");
                setApi(response.data.articleSummaryList);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    if (!api) return null;
    if (error) return <div>error</div>;
    if (loading) return <div>spinner..</div>;

    return (
        <>
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

                                          <time className="card-date">{article.createdAt}</time>
                                          <i className="card-category">{article.categoryName}</i>
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
                                          <time className="card-date">{article.createdAt}</time>
                                          <i className="card-category">{article.categoryName}</i>
                                      </div>
                                  </div>
                              </Link>,
                          ]
                )}
            </div>
        </>
    );
};

Card.defaultProps = {
    createdAt: "2021-02-27 10:00:00",
    category: "카테고리",
    title: "제목",
    image: "https://newneek.co/static/media/episode1.ed37b877.png",
    contents: "내용",
    id: 0,
};

export default Card;
