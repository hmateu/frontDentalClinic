import React from "react";
import "./Header.css"
import { Button } from "../Button/Button";
export const Header = () => {
    return (
        <div className="headerStyle">
            <div className="left">
                LOGO
            </div>
            <div className="right">
                <Button />
            </div>
        </div>
    );
}