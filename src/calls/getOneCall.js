import React, {useEffect} from "react";
import {dataFromSnapshot, getCallsFromDB} from "../firestore/firestoreService";
import {loadCall} from "./callActions";
import {useDispatch} from "react-redux";

export default function GetOneCall({call_id}) {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = getCallsFromDB({
            next: snapshot => dispatch(loadCall(dataFromSnapshot(call_id))),
            error: error => console.log(error)
        });
        return unsubscribe
    }, [dispatch]);

    return(
        <div>

            hello
        </div>

    )

}