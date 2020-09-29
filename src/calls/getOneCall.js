import React from "react";
import { getOneCallFromDB} from "../firestore/firestoreService";
import { loadData} from "./callActions";
import {useDispatch, useSelector} from "react-redux";
import useFirestoreDoc from "../firestore/docHook";

export default function GetOneCall({match}) {


    //TODO: repair button that it won't go away when clicked on call. see if it possible to store previous value
    // from store before changing it.
    const call = useSelector((state) =>
        state.calls.calls.find((call) => call.id === match.params.id));
    const dispatch = useDispatch();
    console.log(call);
    useFirestoreDoc({
        query: () => getOneCallFromDB(match.params.id),
        data: call => dispatch(loadData([call])),
        deps: [match.params.id, dispatch]
    });


    return (
        <div style={{marginLeft: '200px'}}>
            {call.event}
            {Object.values(call.payload).map((p,i)=>
                <div key={i}>

                    {p.uuid}{p.topic}{p.host_email}{p.start_time}
                </div>
            )}
            <div>{call.download_token}</div>




        </div>

    )

}