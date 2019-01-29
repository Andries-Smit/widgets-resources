// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNativeFirebase from "react-native-firebase";

/**
 * @returns {boolean}
 */
function SetBadgeNumber(badgeNumber?: BigJs.Big): Promise<void> {
    // BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/notifications/reference/Notifications#setBadge

    const firebase: typeof ReactNativeFirebase = require("react-native-firebase");

    if (!badgeNumber) {
        throw new TypeError("Input parameter 'Badge number' is required");
    }

    if (badgeNumber.lt(0)) {
        throw new TypeError("Input parameter 'Badge number' should be zero or greater");
    }

    firebase.notifications().setBadge(Number(badgeNumber));
    return Promise.resolve();

    // END USER CODE
}
