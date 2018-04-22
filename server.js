const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
require('./routes/email')(app);

if (process.env.NODE_ENV === 'production') {
    // Express serve up prod assets
    app.use(express.static('client/build'));

    // Express serve index.html if it doesn't recognize router
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});

// app.listen(port, () => console.log(`Server start on port ${port}`));