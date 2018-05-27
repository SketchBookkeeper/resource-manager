const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
//  });

// Test function
// orderResources({title: 'test', uid: 'C7fDPD1AkHYZ8dTVKjKX43aiZRe2'}, {params: { resourceId: 'czLMiwiivde2NDWEQECP' }})
// exports.orderResources = functions.firestore
//   .document('resources/{resourceId}')
//   .onCreate((snap, context) => {
//     const data = snap.data();
//     const documentId = context.params.resourceId;
//     const documentRef = admin.firestore().collection('resources').doc(documentId);

//     return admin.firestore()
//       .collection('resources')
//       .where('uid', '==', data.uid)
//       .get()
//       .then(querySnapshot => {
//         return documentRef.update({order: parseInt(querySnapshot.size - 1)});
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   });
