import React from "react";
import "./Sidebarchat.css";

const Sidebarchat = () =>{

    return(
        <>
        <div className="sidebar-child-container-logo padding-top10">
            <div>
                <i className="fa-solid fa-message padding-left30"></i>
                <label className="padding-left15 sidebar-font-size">Chat</label>
            </div>
            <div>
                <i className="fa-solid fa-angle-down sidebar-logo-size padding-right25"></i>
            </div>
        </div>
        </>
    )
}

export { Sidebarchat }