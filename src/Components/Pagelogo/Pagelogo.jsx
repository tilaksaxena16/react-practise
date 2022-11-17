import React from "react";
import "./Pagelogo.css"

const Pagelogo = () =>{

    return(
        <>
            <div className="pagelogo-container">
                <div>
                    <i className="fa-brands fa-monero page-logo"></i>
                </div>
                <div>
                    <label className="pagelogo-font">Metronic</label>
                </div>
            </div>
        </>
    )
}

export { Pagelogo }