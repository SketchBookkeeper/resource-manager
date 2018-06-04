const randomColor = require('randomcolor');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
//  });

// Give new collections a random color
// Test
// assignCollectionColor({name: 'new', uid: 'C7fDPD1AkHYZ8dTVKjKX43aiZRe2'}, {params: { collectionId: 'DHNWSG3TkRDMRtr0K89Z' }})
exports.assignCollectionColor = functions.firestore
  .document('collections/{collectionId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    const documentId = context.params.collectionId;
    const documentRef = admin.firestore().collection('collections').doc(documentId);
    const color = randomColor({
      luminosity: 'light'
    });

    return admin.firestore()
      .collection('collections')
      .where('uid', '==', data.uid)
      .get()
      .then(querySnapshot => {
        return documentRef.update({color: color});
      })
  })

// TODO delete collections if user is removed
