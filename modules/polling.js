const https = require('https');


module.exports = {
    requestData() {
        https.get('https://tamu-backend.herokuapp.com/message/getMessages', (resp) => {
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                console.log('Data received:', JSON.parse(chunk))
                // Send the message to dibua
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    },
    start() {
        setInterval(this.requestData, 3000);
    }
}
