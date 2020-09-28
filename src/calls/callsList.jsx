import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../firestore/firestoreService";
import { calls } from "./callfile";

//// NOT IN USE!

export default function CallList() {


  const callsDB = db.collection("calls").get().then((snapshot)=>{
snapshot.docs.forEach(doc => {

    const calls = JSON.stringify(doc.data())
    console.log(calls)
})
  })

  return (
    <>
    <div>Get this! :
        {calls.map((c,i)=>
        <div key={i}>
            {c.event}
            {JSON.stringify(c.payload)}
            {c.download_token}

        </div>
        )}
        
    </div>
    </>
  );
}
