import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { text, _onClick, padding, width, margin, children } = props;
    const styles = {
        margin: margin,
        width: width,
        padding: padding,
    };

    return (
        <React.Fragment>
            <ButtonStyle {...styles} onClick={_onClick}>
                {text ? text : children}
            </ButtonStyle>
        </React.Fragment>
    );
};

Button.defaultProps = {
    text: false,
    padding: "12px 0",
    width: "100%",
    margin: false,
    _onClick: () => {},
};

const ButtonStyle = styled.button`
    width: ${(props) => props.width};
    background-color: #212121;
    color: #fff;
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border: none;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;
