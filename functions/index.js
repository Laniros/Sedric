const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


const addCall = (call) => {
    return admin.firestore().collection('calls')
        .add(call).then(call => console.log('Call Added!', call))

};

exports.callCreated = functions.firestore.document('calls/{callId}')
    .onCreate(call => {
        const data = call.data();
        if (data.event === 'recording.completed2'){
            console.log('I added your event once!');
            return null;
        }
        const callDetails = {
            "event": "recording.completed2",
            "payload": {
                "account_id":"created by cloud function!",
                "object": {
                    "uuid": "ffffffffffff==",
                    "topic": "vvvvvvvvvvvvvv Meeting",
                    "start_time": "2020-02-16T11:18:55Z",
                    "host_email": "interview@sedric.me"
                }
            },
            "download_token": ""
        };

        return addCall(callDetails)
    });