const admin = require('firebase-admin');
const serviceAccount = require('../../functions/ServiceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// admin.initializeApp();

const db = admin.firestore();

module.exports = {admin, db, serviceAccount}