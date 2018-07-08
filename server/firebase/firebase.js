const admin = require('firebase-admin')
    ,serviceAccount = require('./express-17060-firebase-adminsdk-12yak-94fb4135c1.json');

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://express-17060.firebaseio.com"
      });

const db = admin.database();
const ref = db.ref("/table");
// ref.once("value", function(snapshot) {
//     console.log(snapshot.val());
// })

module.exports = ref;
