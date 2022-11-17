import React from "react";
import "./Sidebarerrors.css";

const Sidebarerrors = () =>{

    return(
        <>
        <div className="sidebar-child-container-logo">
            <div>
                <i className="fa-solid fa-circle-xmark padding-left30"></i>
                <label className="padding-left15 sidebar-font-size">Errors</label>
            </div>
            <div>
                <i className="fa-solid fa-angle-down sidebar-logo-size padding-right25"></i>
            </div>
        </div>
        </>
    )
}

export { Sidebarerrors }