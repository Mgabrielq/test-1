onst express = require('express')
var AWS = require("aws-sdk");
const path = require('path')
const app = express()
const port = 3000

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
      console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
  });

const bible = {
    books: [
        { title: "Genesis" },
        { title: "Exodus" },
        { title: "Leviticus" },
        { title: "Numbers" },
        { title: "Deuteronomy" },
        { title: "Josue" },
        { title: "Juises" },
        { title: "Rute" },
        { title: "1 Samuel" },
        { title: "2 Samuel" },
       
    ]
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', `index.html`))
})

app.get('/bible', (req, res) => {
    res.json(JSON.stringify(bible))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
