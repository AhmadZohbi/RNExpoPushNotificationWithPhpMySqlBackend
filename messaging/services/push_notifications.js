import {Permissions, Notifications} from 'expo';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import lodash from 'firebase';

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushnotoken');
    console.log(previousToken);
    if (previousToken) {
        return;
    } else {
        let {status} = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
        if (status !== 'granted') {
            return;
        }

        let token = await Notifications.getExpoPushTokenAsync();
        await axios.get('http://192.168.1.70/firebasepushnotification/register.php?token='+token)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        AsyncStorage.setItem('pushnotoken',token);
    }
};
