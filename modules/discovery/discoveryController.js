var bonjour = require('bonjour')()

module.exports = {
    discoverDevices(req, res) {
        // Uncomment this to test
        // bonjour.publish({ name: 'DIBUA_2', type: 'http', port: 3001 })
        // bonjour.publish({ name: 'DIBUA_1', type: 'http', port: 3002 })
        var devices = []
        bonjour.find({ type: 'http' }, function (service) {
            if (service && service.name.indexOf("DIBUA") !== -1) {
                devices.push({port: service.port, name: service.name})
            }
        })
        setTimeout(function () {
            res.json({devices: devices})
        }, 4000, 'funky');
    }
}