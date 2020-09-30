import React from "react";
import {useSelector} from "react-redux";
import {CardContent} from "@material-ui/core";
import {SearchBar} from './SearchBar'
import {Card} from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
export default function GetOneCall({match}) {


    //TODO: repair button that it won't go away when clicked on call. see if it possible to store previous value
    // from store before changing it.
    const call = useSelector((state) =>
        state.calls.calls.find((call) => call.id === match.params.id));


    //TODO: render perfectly the 'object' part in payload
    function payloadObject(call) {
        return <div>
            {JSON.stringify(call.payload.object)}

        </div>
    }


    return (

        <div>
            <SearchBar/>
            <Card style={{marginLeft: '150px', width: '700px', height:'700px'}}>
                <CardContent>
                    <Typography variant='body1'>
                        Event: {call.event}
                    </Typography>
                    <Typography variant='body1'>
                        Account ID: {call.payload.account_id}
                    </Typography>
                    <Typography variant='body1'>
                       Object: {payloadObject(call)}
                    </Typography>
                    <Typography variant='body1'>
                        Download Token: {call.download_token}
                    </Typography>
                    <Typography variant='body1'>
                        Storage: {call.storage_url}
                    </Typography>
                    <CardMedia component="video" style={{marginLeft: '150px', width: 300, height: 400}}
                        src="https://firebasestorage.googleapis.com/v0/b/sedric/o/users%2Fdemo-manager%40sedric.me%2Frecordings%2F2020-03-20T18%3A35%3A42Z.mp4?alt=media&token=85a882bb-5d41-4322-b700-91de60b78fcf"
                        title="Live from space album cover"
                               controls
                        />
                </CardContent>
            </Card>
    </div>

    )

}