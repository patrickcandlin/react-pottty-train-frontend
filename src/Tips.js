import React from "react";


export default function Tips (props) {


    function tipComments () { 
        return props.tips.map(tip => {
        return <div>{tip.content}</div>
        })
    }
        return(
            <div className="potty-container">
                {tipComments()}
            </div>
        )

}