// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNativeFirebase from "react-native-firebase";

/**
 * Checks if the user has granted the appropriate permissions to be able to send and receive messages.
 * Returns true if permission is granted, false otherwise.
 * @returns {boolean}
 */
function HasPushNotificationPermission(): Promise<boolean> {
    // BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/notifications/receiving-notifications

    const firebase: typeof ReactNativeFirebase = require("react-native-firebase");

    return firebase.messaging().hasPermission();

    // END USER CODE
}
