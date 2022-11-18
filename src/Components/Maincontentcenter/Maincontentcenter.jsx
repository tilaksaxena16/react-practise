import React from "react";
import "./Maincontentcenter.css";

const Maincontentcenter = () => {

    return (
        <>
            <div className="maincontent-center-container">
                <div>
                    <h4 className="white-col">Vertical</h4>
                    <label className="white-col"><span className="heading-col">wizards</span> - vertical</label>
                </div>
                <div className="maincontent-child-flex">
                    <div className="maincontent-center-child">
                        <i className="fa-solid fa-filter padding-right5"></i>
                        <label>Filter</label>
                    </div>
                    <div className="main-content-child">
                        <label>Create</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Maincontentcenter }