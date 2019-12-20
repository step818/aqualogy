const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello, magical people!");
});

exports.blogCreated = functions.firestore
  .document('blogs/{blogId}')
  .onCreate(doc => {

    const blog = doc.data();
    const notification = {
      content: 'Added a new blog',
      user: `${blog.authorFirstName} ${blog.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
});

exports.userJoined = functions.auth.user()
  .onCreate(user => {

    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'New user joined',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
      });
  });