// Hire.js
import React from "react";
import { Grid, Text, Button } from "/elements";

// 라우터
import { history } from "../redux/configureStore";

const Hire = () => {
    
    return (
        <React.Fragment>
            <Grid>
                <Text bold>
                    뉴닉채용 광고!
                </Text>
                <Button>더 보기</Button>
            </Grid>
        </React.Fragment>
    )
}

Hire.defaultProps = {
    
}

export default Hire;