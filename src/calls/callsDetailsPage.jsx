import { Divider, Grid } from '@material-ui/core';
import React , {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataFromSnapshot, getCallsFromDB, db } from '../firestore/firestoreService';
import { loadData } from './callActions';
import simpleCard from './callCard'

export default function CallDetailsPage(){

    const callsRef = useSelector(state => state.calls.calls)


    const dispatch = useDispatch();
useEffect(()=>{
    const unsubscribe = getCallsFromDB({
        next: snapshot => dispatch(loadData(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot)))),
        error: error => console.log(error)
    })
    return unsubscribe
}, [dispatch])
    
    return (
        <Grid container>
               <simpleCard/>
        <div>
    
  
            {Object.values(callsRef).map((call,i) => (
    <div key={i}>{call.event}
    {Object.values(call.payload).map((p,i)=>
    <div key={i}>{p.uuid}{p.topic}{p.host_email}{p.start_time}</div>
    )}
    {call.download_token}
    <Divider/>
    </div>

              ))}
        </div>
        <simpleCard></simpleCard>
        </Grid>
    )
    
    }