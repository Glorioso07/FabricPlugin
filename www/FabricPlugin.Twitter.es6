
class FabricTwitter {
    constructor() {}

    login(successCallback, errorCallback) {
        window.fabric.core.execTwitter(successCallback, errorCallback, 'login', []);
    }
}

module.exports = new FabricTwitter();
