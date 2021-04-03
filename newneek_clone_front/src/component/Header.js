import React from "react";

import { Grid, Text, Button } from "../elements";

import { history } from "../redux/configureStore";

const Header = () => {
    
    return (
        <React.Fragment>
            <Grid>
                <Text>경제기본기</Text>
                <Text>여성의 날</Text>

                <Button>검색</Button>
                <Button>고슴마이페이지</Button>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {};

export default Header;