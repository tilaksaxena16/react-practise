import React from "react";
import "./Maincontentright.css"

const Maincontentright = () => {

    return (
        <>
            <div className="maincontentright-container">
                <div className="margin-div">
                    <div className="maincontentright-child-div">
                        <h3 className="white-col">Choose Account Type</h3>
                        <i className="fa-solid fa-circle-exclamation darkgrey-col padding-erroricon"></i>
                    </div>
                    <div>
                        <p className="darkgrey-col">If you need more info,please check out <span className="blue-col">Help Page</span></p>
                    </div>
                </div>
                <div className="maincontentright-child-div1">
                    <div className="maincontent-card border-card-left">
                        <div>
                            <i className="fa-solid fa-file-invoice darkgrey-col padding-icon-maincontent"></i>
                        </div>
                        <div>
                            <h4 className="white-col">Personal Account</h4>
                            <p className="darkgrey-col font-size12">If you need more info, please
                                check it out
                            </p>
                        </div>
                    </div>
                    <div className="maincontent-card border-card-right">
                        <div>
                            <i className="fa-solid fa-suitcase darkgrey-col padding-icon-maincontent"></i>
                        </div>
                        <div>
                            <h4 className="white-col">Corporate Account</h4>
                            <p className="darkgrey-col font-size12">Create corporate account to mane users</p>
                        </div>
                    </div>
                </div>
                <div className="maincontent-button-container">
                    <div className="maincontent-button">
                        <label className="maincontentright-child-div">Continue</label><i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Maincontentright }