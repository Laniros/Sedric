import React from "react";
import {getCallsFromDB, getOneCallFromDB} from "../firestore/firestoreService";
import { loadData} from "./callActions";
import {useDispatch, useSelector} from "react-redux";
import useFirestoreDoc from "../firestore/docHook";
import Drawer from "@material-ui/core/Drawer/Drawer";
import {CardContent, Divider} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import useStyles from "../menus/DrawerMUI";
import {Card} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
export default function GetOneCall({match}) {


    //TODO: repair button that it won't go away when clicked on call. see if it possible to store previous value
    // from store before changing it.
    const call = useSelector((state) =>
        state.calls.calls.find((call) => call.id === match.params.id));
    console.log(call);







    const classes = useStyles();
    return (

        <div>
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
                {/*{callList()}*/}


            </List>
        </Drawer>

            <Card style={{marginLeft: '150px', width: '400px', height:'300px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {call.event}
                    </Typography>
                    <Typography variant='body1'>
                        {Object.values(call.payload).map((p,i)=>
                            <div key={i}>
                                <div>
                             UUID:{p.uuid}
                                </div>
                                <div>
                                Topic:{p.topic}
                                </div>
                                <div>
                                  Host Email:{p.host_email}
                                </div>
                                <div>
                                  Start Time:{p.start_time}
                                </div>
                            </div>
                        )}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {call.download_token}
                    </Typography>

                </CardContent>
            </Card>
    </div>

    )

}