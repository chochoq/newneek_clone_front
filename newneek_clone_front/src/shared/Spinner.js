import React from "react";
import "../shared/App.css";

import spinner from "../shared/spinner.png";

const Spinner = () => {
    return (
        <div className="spinner-background">
            <div className="container">
                <div className="spinner">
                    <img src={spinner} alt={spinner} width="240px" />
                </div>
            </div>
        </div>
    );
};

export default Spinner;
