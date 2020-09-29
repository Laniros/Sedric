import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import useFirestoreCollection from "../firestore/collectionHook";
import {getCallsFromDB} from "../firestore/firestoreService";
import {loadData} from "./callActions";

//Get number of calls from redux store

function GetNumberOfCalls(){

    const calls = useSelector(state => state.calls.calls);
    const dispatch = useDispatch();

    // query the DB for changes
    useFirestoreCollection({
        query: () => getCallsFromDB(),
        data: calls => dispatch(loadData(calls)),
        deps: [dispatch]
    });

    return calls.length;

}

export default GetNumberOfCalls;