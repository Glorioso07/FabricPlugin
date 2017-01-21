const exec = require('cordova/exec');

class FabricPlugin {
    constructor() {}

    pluginCallName() {
        return 'FabricPlugin';
    }

    execPlugin(method, parameters) {
        exec(null, null, this.pluginCallName(), method, parameters);
    }

    execTwitter(successCallback, errorCallback, method, parameters) {
    	exec(successCallback, errorCallback, this.pluginCallName(), method, parameters);
    }

}

module.exports = new FabricPlugin();
