// AllCardList.js
import React, { useEffect, useState } from "react";

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

import { Image } from "../elements";

import axios from "axios";
import Spinner from "../shared/Spinner";

const AllCardList = (props) => {
    console.log(props);
    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchUsers = async (param) => {
            try {
                setError(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get(
                    `http://13.125.15.255:8080/api/articles?page=${page}`
                );
                setApi(() => {
                    if (response.data.articleSummaryList) {
                        setLoading(false);
                        return response.data.articleSummaryList;
                    } else {
                        setLoading(true);
                        return [];
                    }
                });
            } catch (e) {
                setError(e);
            }
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        if (page !== 0) {
            let response;
            const paging = async (page) => {
                try {
                    response = await axios.get(
                        `http://13.125.15.255:8080/api/articles?page=${page}`
                    );
                    setApi((prev) => {
                        return [...prev, ...response.data.articleSummaryList];
                    });
                } catch (e) {
                    setError(e);
                }
            };
            paging(page);
        }
    }, [page]);
    if (!api) return null;
    if (error) return <div>error</div>;

    const Plus = async () => {
        setPage(page + 1);
    };

    return loading ? (
        <Spinner />
    ) : (
        <React.Fragment>
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
                                              {article.categoryName === "?????????19"
                                                  ? "???? "
                                                  : article.categoryName === "5?????????"
                                                  ? "??????? "
                                                  : article.categoryName === "????????????"
                                                  ? "?????? "
                                                  : article.categoryName === "??????????????"
                                                  ? "???? "
                                                  : article.categoryName === "??????"
                                                  ? "???? "
                                                  : article.categoryName === "???????????"
                                                  ? "???? "
                                                  : article.categoryName === "??????"
                                                  ? "???? "
                                                  : article.categoryName === "??????"
                                                  ? "???? "
                                                  : article.categoryName === "??????"
                                                  ? "???? "
                                                  : article.categoryName === "?????????????????"
                                                  ? "???? "
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
                                          <time className="card-date">{article.createdAt}</time>
                                          <i className="card-category">{article.categoryName}</i>
                                      </div>
                                  </div>
                              </Link>,
                          ]
                )}
            </div>
            <button className="loadmore secondary-button" onClick={Plus}>
                ?????????
            </button>
        </React.Fragment>
    );
};

AllCardList.defaultProps = {
    createdAt: "2021-02-27 10:00:00",
    category: "????????????",
    title: "??????",
    image: "?????????",
    contents: "??????",
    id: 0,
};

export default AllCardList;
