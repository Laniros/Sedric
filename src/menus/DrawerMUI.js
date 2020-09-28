import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Button from "@material-ui/core/Button";
import SidebarExampleVisible from "./DrawerForCalls";

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        maxWidth: '20px',
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="relative" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Sedric
                    </Typography>
                </Toolbar>
            </AppBar>
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
                    <ListItem > <Button color="inherit" href="/dashboard">Dashboard</Button></ListItem>
                    <ListItem > <Button color="inherit" href="/sandbox">SB</Button></ListItem>



                </List>
                <Divider />
                <List>
                    {['Login'].map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>


            </main>
        </div>
    );
}
