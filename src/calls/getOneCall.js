import React from "react";
import {useSelector} from "react-redux";
import {CardContent} from "@material-ui/core";
import {Card} from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
export default function GetOneCall({match}) {


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
            <Card style={{marginLeft: '150px', width: '700px', height:'500px'}}>
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
                    {call.storage_url?
                    <CardMedia component="video" style={{marginLeft: '150px', width: 300}}
src={call.storage_url}
                        title="From Storage"
                               controls
                        /> : <div></div>}
                </CardContent>
            </Card>
    </div>

    )

}