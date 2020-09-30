import { Divider} from '@material-ui/core';
import React from 'react';
import {useSelector} from 'react-redux';
import {SearchBar} from './SearchBar'
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Drawer from "@material-ui/core/Drawer/Drawer";
import useStyles from '../menus/DrawerMUI'

export default function CallDetailsPage() {

    //TODO: Implement search by topic

    //Get data from store
    const callsRef = useSelector(state => state.calls.calls);

    //Render call buttons
    const callList = () =>{

        return Object.values(callsRef).map((call, i) => {
            return (<ListItem key={i}>
                    <Button component={Link} to={`/calls/${call.id}`} type='button'> Call {i+1}</Button>

            </ListItem>)
        });
    };

    const classes = useStyles();
    return (

        <div className={classes.root}>
            <SearchBar/>
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