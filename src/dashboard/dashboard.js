import React from 'react'
import { useSelector } from "react-redux";

export default function Dashboard(){
    const {calls} = useSelector(state => state.calls)

    return(

        <h1>{calls.length}</h1>
    )

}