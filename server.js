const express = require('express');
const app = express();
const options = {
    root: __dirname + '/public/',
    dotfiles: 'deny'
};
app.get('/', (req, res) => {
    res.sendFile('index.html', options);
});
app.get('/resources/:file', (req, res) => {
    const file = req.params.file;
    if(file.indexOf('.json') !== -1) {
        res.status(403).send("You can't access that!");
    } else {
        console.log(`Requesting ${file}`);
        res.sendFile(file, options);
    }
});
app.listen(3000);

