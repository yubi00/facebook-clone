import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB4R-1wirD33UWJVrZFvSrx6JjJVofvYwM',
  authDomain: 'facebook-clone-7aec4.firebaseapp.com',
  databaseURL: 'https://facebook-clone-7aec4.firebaseio.com',
  projectId: 'facebook-clone-7aec4',
  storageBucket: 'facebook-clone-7aec4.appspot.com',
  messagingSenderId: '29489491911',
  appId: '1:29489491911:web:98894e90f2ddbc844273e2',
  measurementId: 'G-SV4ZXV76JS'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db as default, auth, provider }
