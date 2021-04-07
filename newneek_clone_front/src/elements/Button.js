import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { text, _onClick, padding, width, margin, children, height, is_black, is_header } = props;
    const styles = {
        margin: margin,
        width: width,
        padding: padding,
        height: height,
    };

    return (
        <React.Fragment>
            {is_header ? (
                <SearchStyle {...styles} onClick={_onClick}>
                    {text ? text : children}
                </SearchStyle>
            ) : is_black ? (
                <HireStyle {...styles} onClick={_onClick}>
                    {text ? text : children}
                </HireStyle>
            ) : (
                <PagingStyle {...styles} onClick={_onClick}>
                    {text ? text : children}
                </PagingStyle>
            )}
        </React.Fragment>
    );
};

Button.defaultProps = {
    text: false,
    padding: "11px 18px",
    width: "240px",
    height: "44px",
    margin: false,
    _onClick: () => {},
};

const HireStyle = styled.button`
    width: ${(props) => props.width};
    heigth: ${(props) => props.height};
    background-color: #161616;
    color: #fff;
    padding: ${(props) => props.padding};
    border: 1px solid #161616;
    cursor: pointer;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    &:hover {
        background-color: #fff;
        color: #161616;
        border: 1px solid #161616;
    }
`;

const PagingStyle = styled.button`
    width: ${(props) => props.width};
    background-color: #fff;
    color: #161616;
    padding: ${(props) => props.padding};
    border: 1px solid #161616;
    cursor: pointer;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    &:hover {
        background-color: #fb7800;
        color: #161616;
    }
`;

const SearchStyle = styled.button`
    width: 48px;
    height: 48px;
    cursor: pointer;
    background-color: #ebebeb;
    color: #161616;
    border: 1px solid #161616;
    margin-right: -1px;
`;

export default Button;
