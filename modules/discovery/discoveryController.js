var bonjour = require('bonjour')()
const request = require('request');

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
            // const url = `http://${devices[0].service.addresses[0]}:${devices[0].port}/send-message`
            request.post('https://tamu-backend.herokuapp.com/message/savePorts', {json: {devices}}, function(err, response) {
                console.log(err)
            })
            // request.post(url, {json: {message: 'oi dibua'}}, function(err, response) {
            //     console.log(err)
            // })
        }, 5000, 'funky');
    }
}