import React from "react";
import "./Sidebarcrafted.css"

const Sidebarcrafted = (user) =>{

    return(
        <>
        <div className="sidebar-child-font">
            <h6 className="padding-left25">{user.name}</h6>
        </div>
        
        </>
    )
}

export { Sidebarcrafted }