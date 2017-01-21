
class FabricTwitter {
    constructor() {}

    login() {
        window.fabric.core.execPlugin('login', [
        ]);
    }
}

module.exports = new FabricTwitter();
