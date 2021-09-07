import React from "react";

import './styles.css';

export const ButtonTop = ({children}) => {
    return (
        <div className="my-button" role="button">
            { children }
        </div>
    )
};