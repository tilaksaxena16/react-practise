import React from "react";
import "./Sidebarwidgets.css";

const Sidebarwidgets = () =>{

    return(
        <>
        <div className="sidebar-child-container-logo">
            <div>
                <i className="fa-solid fa-dice-four padding-left30"></i>
                <label className="padding-left15 sidebar-font-size">Widgets</label>
            </div>
            <div>
                <i className="fa-solid fa-angle-down sidebar-logo-size padding-right25"></i>
            </div>
        </div>
        </>
    )
}

export { Sidebarwidgets }