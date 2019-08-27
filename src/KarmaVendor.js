import getClient from './utils/getClient';

class KarmaVendor {
    constructor(http, ws, userId, jwt) {
        this.userId = userId;
        this.client = getClient(jwt, http, ws);
    }

    pendingCardRequests() {
        console.log("pendingCardRequests");
    }

    submitCardResponse() {
        console.log("submitCardResponse");
    }
}

export { KarmaVendor }
