import React from "react";
import "./Sidebarpages.css";

const Sidebarpages = (user) =>{

    return(
        <>
        <div className="sidebar-child-container-logo">
            <div>
                <i className="fa-solid fa-file-lines padding-left30"></i>
                <label className="padding-left15 sidebar-font-size">{user.name}</label>
            </div>
            <div>
                <i className="fa-solid fa-angle-down sidebar-logo-size padding-right25"></i>
            </div>
        </div>
        </>
    )
}

export { Sidebarpages }