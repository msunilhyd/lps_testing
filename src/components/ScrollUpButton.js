import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
 
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton />
                //This is all you need to get the default view working
            </div>
        );
    }
}