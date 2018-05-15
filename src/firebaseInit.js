import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

const firebaseApp = firebase.firestore()
firebaseApp.settings({
  timestampsInSnapshots: true
})

export default firebaseApp
