const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
//  });

// Test function
// orderResources({title: 'test', uid: 'C7fDPD1AkHYZ8dTVKjKX43aiZRe2'}, {params: { resourceId: 'czLMiwiivde2NDWEQECP' }})
exports.orderResources = functions.firestore
  .document('resources/{resourceId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    const documentId = context.params.resourceId;
    const documentRef = admin.firestore().collection('resources').doc(documentId);

    // In preparation for newly added resource
    // Update other existing resources order by increasing 1
    const userCollection = admin.firestore()
      .collection('resources')
      .where('uid', '==', data.uid)
      .get()
      .then(querySnapshot => {
        return querySnapshot.forEach(doc => {
          // don't update the newest resource
          if (data.id === doc.id) return;

          let order = doc.data().order;
          order++;
          const documentRef = admin.firestore().collection('resources').doc(doc.id);
          return documentRef.update({order: order});
        });
      })
      .catch(error => {
        console.error(error);
      });

    // Add the order 0 to the newly created resource
    // Placing it at the beginning of the collection
    return documentRef.update({order: 0});
  });
