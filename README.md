# RNExpoPushNotificationWithPhpMySqlBackend
This react native sample that i made show how to send expo push notification with mysql php backend connected to it.

1)Create MySqlDatabase in phpmyadmin and create the table users by executing the following command:

CREATE TABLE `users` (
  `Token` varchar(700) NOT NULL
)

2) Put the php files located in folder expo_push_notification_backend on your server

3)Open the 'messaging' expo project in your favorite text editor and open it in cmd or terminal and run npm install to install all node_modules

4) the push notification services is located in /services/push_notification.js
Open it and change the location specific to your web server url and call the file

let token = await Notifications.getExpoPushTokenAsync();
await axios.get('http://192.168.1.70/expo_push_notification_backend/register_for_push_notification.php?token='+token)
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
