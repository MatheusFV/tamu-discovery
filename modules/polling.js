const https = require('https');
const discovery = require('./discovery/discoveryController');
const request = require('request');

module.exports = {
    requestData() {
        https.get('https://tamu-backend.herokuapp.com/message/getMessages', (resp) => {
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                const data = JSON.parse(chunk).data
                for (var key in data) {
                    const url = `http://${key}/send-message`
                    request.post(url, {json: {message: data[key]}}, function(err, response) {
                    })
                }
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    },
    start() {
        setInterval(this.requestData, 3000);
    },
    refreshDevices() {
        setInterval(discovery.discoverDevices, 5000);
    }
}
