import React from 'react'
import { useSelector } from "react-redux";

//Get number of calls from redux store

function GetNumberOfCalls(){
    const {calls} = useSelector(state => state.calls);

    return calls.length;

}

export default GetNumberOfCalls;