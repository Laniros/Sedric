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
        if (data.event === 'Hello to firebase!2'){
            console.log('I added your event once!');
            return null;
        }
        const callDetails = {
            event: 'Hello to firebase!2',
            payload: [],
            download_token: "353151353"

        };

        return addCall(callDetails)
    });