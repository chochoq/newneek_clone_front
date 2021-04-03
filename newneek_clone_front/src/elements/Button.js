import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { text, _onClick, padding, width, margin, children, height, is_black } = props;
    const styles = {
        margin: margin,
        width: width,
        padding: padding,
        height: height,
    };

    return (
        <React.Fragment>
            {is_black ? (
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
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    &:hover {
        background-color: #fb7800;
        color: #161616;
    }
`;

export default Button;
