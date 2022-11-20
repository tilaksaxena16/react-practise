import React from "react";
import "./Sidebardashboard.css";

const Sidebardashboard = (user) => {

    return (
        <>
            <div className="sidebar-child-container">
                <i className="fa-solid fa-layer-group padding-left30 sidebar-logo-size"></i>
                <label className="padding-left15 sidebar-font-size">{user.name}</label>
            </div>
        </>
    )
}

export { Sidebardashboard }