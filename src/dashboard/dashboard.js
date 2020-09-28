import React from 'react'
import GetNumberOfCalls from '../calls/getNumber'

export default function Dashboard(){

    return(

        <div className="content"><h1>{GetNumberOfCalls()}</h1></div>
    )

}