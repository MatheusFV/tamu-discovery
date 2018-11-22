var bonjour = require('bonjour')()
const request = require('request');

bonjour.publish({ name: 'DIBUA_2', type: 'http', port: 3001 })
bonjour.publish({ name: 'DIBUA_1', type: 'http', port: 3002 })

module.exports = {
    discoverDevices() {
        // Uncomment this to test
        var devices = []
        bonjour.find({ type: 'http' }, function (service) {
            if (service && service.name.indexOf("DIBUA") !== -1) {
                devices.push({port: service.port, name: service.name, service: service})
            }
        })

        setTimeout(function () {
            request.post('https://tamu-backend.herokuapp.com/message/savePorts', {json: {devices}}, function(err, response) {
                console.log(err)
            })
        }, 5000, 'funky');
    }
}