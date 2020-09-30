import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCallsFromDB} from '../firestore/firestoreService';
import {loadData} from '../calls/callActions';
import useFirestoreCollection from "../firestore/collectionHook";
import useStyles from '../menus/DrawerMUI'


export default function Homepage() {


//Get data from DB, storing using redux
    const dispatch = useDispatch();
    const num = useSelector(state => state.calls.calls.length);
    console.log(num);

    // query the DB for changes
    useFirestoreCollection({
        query: () => getCallsFromDB(),
        data: calls => dispatch(loadData(calls)),
        deps: [dispatch]
    });



    const classes = useStyles();
    return (

        <div className={classes.root}>

        </div>
    )

}