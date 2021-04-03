import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
    const { label, placeholder, _onChange, type, value, is_submit, onSubmit } = props;

    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                {is_submit ? (
                    <InputStyle
                        type={type}
                        placeholder={placeholder}
                        onChange={_onChange}
                        value={value}
                        // onKeyPress={(e) => {
                        //     if (e.key === "Enter") {
                        //         onSubmit(e);
                        //     }
                        // }}
                    />
                ) : (
                    <InputStyle type={type} placeholder={placeholder} onChange={_onChange} />
                )}
            </Grid>
        </React.Fragment>
    );
};

Input.defaultProps = {
    multiLine: false,
    label: false,
    placeholder: "텍스트를 입력해주세요.",
    type: "text",
    is_submit: false,
    onSubmit: () => {},
    _onChange: () => {},
};

const InputStyle = styled.input`
    border: 1px solid #666;
    width: 100%;
    padding: 20px 4px;
    box-sizing: border-box;
`;

export default Input;
