import React from "react";
import "./Sidebaraccounts.css";

const Sidebaraccounts = () =>{

    return(
        <>
        <div className="sidebar-child-container-logo">
            <div>
                <i className="fa-solid fa-user padding-left30"></i>
                <label className="padding-left15 sidebar-font-size">Accounts</label>
            </div>
            <div>
                <i className="fa-solid fa-angle-down sidebar-logo-size padding-right25"></i>
            </div>
        </div>
        </>
    )
}

export { Sidebaraccounts }