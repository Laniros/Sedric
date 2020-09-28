import {Card, CardContent, Divider, Grid} from '@material-ui/core';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dataFromSnapshot, getCallsFromDB} from '../firestore/firestoreService';
import {loadData} from './callActions';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'


export default function CallDetailsPage() {
//Get data from DB, using redux
    const callsRef = useSelector(state => state.calls.calls);
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = getCallsFromDB({
            next: snapshot => dispatch(loadData(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot)))),
            error: error => console.log(error)
        });
        return unsubscribe
    }, [dispatch]);

    //TODO: create a proper menu or sidebar to hold the buttons
    //Render call buttons
    const callList = () =>{

        return Object.values(callsRef).map((call, i) => {
            return (<div>

                    <Button key={i} component={Link} to={`/calls/${call.id}`} type='button'> Call {i+1}</Button>
            </div>)
        });
    };

    return (
        <div>

            <Grid item xs={1}>
                {callList()}
            </Grid>
                <Grid style={{position: 'absolute ', marginLeft: "200px"}} container spaceing={4}>
                    <Grid item xs={6}>
                        {Object.values(callsRef).map((call, i) =>
                            <Card key={i} style={{marginTop: '20px'}}>
                                <CardContent>
                                    <div className="display-linebreak">
                                        event: {call.event}
                                    </div>

                                    <div className="display-linebreak">
                                        payload: {Object.values(call.payload).map((p, i) =>
                                        <div key={i}>{p.uuid}{p.topic}{p.host_email}{p.start_time}</div>
                                    )}
                                    </div>
                                    <div className="display-linebreak">
                                        download_token:{call.download_token}
                                    </div>
                                </CardContent>
                                <Divider/>
                            </Card>
                        )}
                    </Grid>

                </Grid>
            </div>
    )

}