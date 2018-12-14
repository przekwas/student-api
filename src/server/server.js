const express = require('express');
const cors = require('cors');

const indexRouter = require('./routes');

let app = express();

app.use(cors());

app.use('/', indexRouter);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});