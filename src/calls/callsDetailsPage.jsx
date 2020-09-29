import { Divider} from '@material-ui/core';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCallsFromDB} from '../firestore/firestoreService';
import {loadData} from './callActions';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
import useFirestoreCollection from "../firestore/collectionHook";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Drawer from "@material-ui/core/Drawer/Drawer";
import useStyles from '../menus/DrawerMUI'


export default function CallDetailsPage() {
//Get data from DB, using redux
    const callsRef = useSelector(state => state.calls.calls);
    const dispatch = useDispatch();

    // query the DB for changes
    useFirestoreCollection({
       query: () => getCallsFromDB(),
       data: calls => dispatch(loadData(calls)),
        deps: [dispatch]
    });

    //Render call buttons
    const callList = () =>{

        return Object.values(callsRef).map((call, i) => {
            return (<ListItem>
                    <Button key={i} component={Link} to={`/calls/${call.id}`} type='button'> Call {i+1}</Button>

            </ListItem>)
        });
    };
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"

            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem ><Button color="inherit" href="/calls">Calls</Button> </ListItem>
                    {callList()}


                </List>
            </Drawer>
            <main className={classes.content}>


            </main>
        </div>
    )

}