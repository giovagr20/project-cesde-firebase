const admin = require('firebase-admin');
const serviceAccount = require('../../finance-project-cesde.json');
const { getFirestore } = require('firebase-admin/firestore');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://finance-project-cesde-default-rtdb.firebaseio.com/'
});

module.exports = getFirestore();
