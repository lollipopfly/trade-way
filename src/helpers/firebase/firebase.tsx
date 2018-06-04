import * as firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyBUuy2iIrCg_UCBdE7wC5FyBZFVl5sEx5Q",
	authDomain: "trader-app-21794.firebaseapp.com",
	databaseURL: "https://trader-app-21794.firebaseio.com",
	projectId: "trader-app-21794",
	storageBucket: "trader-app-21794.appspot.com",
	messagingSenderId: "261017412000"
};

firebase.initializeApp(config);

export default firebase;

