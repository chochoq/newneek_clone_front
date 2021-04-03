// Main.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../component/Card";
import { Grid } from "../elements";

const Main = (props) => {
    
    return (
        <React.Fragment>
            <Grid>
                <Card>
                    
                </Card>
            </Grid>
        </React.Fragment>
    )
}

Main.defaultProps = {
    createdAt :"2021-02-27 10:00:00",
    category : "카테고리",
    title   : "제목",
    image   : "이미지",
    contents  : "내용",
    id : 0,
}

export default Main;