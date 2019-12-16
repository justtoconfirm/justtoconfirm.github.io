// Firebase config
var firebaseConfig = {
	apiKey: "AIzaSyCA_mM9FFLpxGzZrAWoV3ckC7LPqDrmLzg",
	authDomain: "automated-performance.firebaseapp.com",
	databaseURL: "https://automated-performance.firebaseio.com",
	projectId: "automated-performance",
	storageBucket: "automated-performance.appspot.com",
	messagingSenderId: "391320435503",
	appId: "1:391320435503:web:6241d51d37c2f51dce7fda",
	measurementId: "G-2SCLJLN567"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the real-time Firebase database
var db = firebase.database().ref('/');
console.log(db);