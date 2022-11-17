import React from "react";
import "./Header.css"

const Header = () => {

    return (
        <>
            <div className="header-container">
                <div className="header-left-child">
                    <div className="header-leftarrow-logo">
                        <i className="fa-solid fa-angles-left header-leftarrow"></i>
                    </div>
                    <label className="header-font-size">Dashboard</label>
                    <label className="header-font-size">Layout Builder</label>
                    <div className="header-crafted-design">
                        <label className="header-font-crafted">Crafted</label>
                    </div>
                    <label className="header-font-size">Apps</label>
                    <label className="header-font-size">Mega menu</label>
                </div>

                <div>
                    <i className="fa-solid fa-magnifying-glass header-logo"></i>
                    <i className="fa-solid fa-chart-simple header-logo"></i>
                    <i className="fa-solid fa-swatchbook header-logo"></i>
                    <i className="fa-solid fa-message header-logo"></i>
                    <i className="fa-solid fa-moon header-logo"></i>
                    <i className="fa-solid fa-image-portrait header-logo"></i>
                </div>
            </div>



        </>
    )
}

export { Header }