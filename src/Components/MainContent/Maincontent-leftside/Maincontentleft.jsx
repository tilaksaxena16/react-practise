import React from "react";
import "./Maincontentleft.css"

const Maincontentleft = () => {

    return (
        <>
            <div className="maincontentleft-container">
                <div className="maincontentleft-container-div">
                    <div className="maincontentleft-child-div bg-blue-col">
                        <label>1</label>
                    </div>
                    <div>
                        <h4 className="heading-col">Account Type</h4>
                        <label className="font-size12 white-col">Setup Your Account Details</label>
                    </div>
                </div>
                <div className="maincontentleft-container-div">
                    <div className="maincontentleft-child-div bg-darkblue-col">
                        <label>2</label>
                    </div>
                    <div>
                        <h4 className="white-col">Account Settings</h4>
                        <label className="darkgrey-col font-size12">Setup Your Account Settings</label>
                    </div>
                </div>
                <div className="maincontentleft-container-div">
                    <div className="maincontentleft-child-div bg-darkblue-col">
                        <label>3</label>
                    </div>
                    <div>
                        <h4 className="white-col">Business Info</h4>
                        <label className="darkgrey-col font-size12">Your Business Related Info</label>
                    </div>
                </div>
                <div className="maincontentleft-container-div">
                    <div className="maincontentleft-child-div bg-darkblue-col">
                        <label>4</label>
                    </div>
                    <div>
                        <h4 className="white-col">Billing Details</h4>
                        <label className="darkgrey-col font-size12">Set Your Payment Methods</label>
                    </div>
                </div>
                <div className="maincontentleft-container-div">
                    <div className="maincontentleft-child-div bg-darkblue-col">
                        <label>5</label>
                    </div>
                    <div>
                        <h4 className="white-col">Completed</h4>
                        <label className="darkgrey-col font-size12">Woah,we are here</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Maincontentleft }