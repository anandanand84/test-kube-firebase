var firebase        = require('firebase');
var os              = require("os");
var co              = require('co');
var hostName        = os.hostname();
var configJSON      = require('./config.json');

var config = {
    apiKey: configJSON.apiKey,
    databaseURL: "https://screener-dashboard.firebaseio.com",
};

var dashboard   = firebase.initializeApp(config, 'Dashboard');
dashboard.auth().signInWithEmailAndPassword(configJSON.userName, configJSON.password);
let uid = hostName.split('.').join('_') + "_" + process.pid;
let ref = "/data/"+ uid;

setInterval(co.wrap(function* (){
    try {
        dashboard.database().ref(ref + '/loadavg').set(os.loadavg());
    } catch (e) {
        console.error(e);
    }
}), 3000);