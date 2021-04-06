import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {
        bold,
        medium,
        color,
        size,
        children,
        margin,
        letterSpacing,
        padding,
        is_underline,
    } = props;

    const styles = {
        bold: bold,
        medium: medium,
        color: color,
        size: size,
        margin: margin,
        letterSpacing: letterSpacing,
        padding: padding,
    };

    return (
        <div>
            {is_underline ? (
                <Underline {...styles}>{children}</Underline>
            ) : (
                <P {...styles}>{children}</P>
            )}
        </div>
    );
};

Text.defaultProps = {
    children: null,
    bold: false,
    medium: false,
    color: "#161616",
    size: "14px",
    margin: "0",
    padding: false,
    underline: "none",
    _onClick: () => {},
};

const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? "700" : props.medium ? "500" : "400")};
    letter-spacing: ${(props) => props.letterSpacing};
    ${(props) => (props.padding ? `margin: ${props.padding};` : "")};
    ${(props) => (props.margin ? `padding: ${props.margin};` : "")};
`;

const Underline = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? "700" : "400")};
    letter-spacing: ${(props) => props.letterSpacing};
    text-decoration: underline;
    ${(props) => (props.padding ? `margin: ${props.padding};` : "")};
    ${(props) => (props.margin ? `padding: ${props.margin};` : "")};
`;

export default Text;
