import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
    const { placeholder, _onChange, type, value, is_search, onSubmit } = props;

    return (
        <React.Fragment>
            {is_search ? (
                <SearchStyle
                    type={type}
                    placeholder={placeholder}
                    onChange={_onChange}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            onSubmit(e);
                        }
                    }}
                />
            ) : (
                <LetterStyle
                    type={type}
                    placeholder={placeholder}
                    onChange={_onChange}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            onSubmit(e);
                        }
                    }}
                />
            )}
        </React.Fragment>
    );
};

Input.defaultProps = {
    placeholder: "텍스트를 입력해주세요.",
    type: "text",
    onSubmit: () => {},
    _onChange: () => {},
};

const LetterStyle = styled.input`
    border: 1px solid #161616;
    background-color: #fff;
    height: 48px;
    width: 400px;
    padding: 10px 20px;
    box-sizing: border-box;
`;

const SearchStyle = styled.input`
    border: 1px solid #161616;
    background-color: #fff;
    height: 52px;
    width: 530px;
    padding: 10px 40px 11px 1.5rem;
    box-sizing: border-box;
`;

export default Input;
