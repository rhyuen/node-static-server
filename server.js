const express = require('express')
const path = require('path')
const serveStatic = require('serve-static');
const helmet = require("helmet");
const PORT = process.env.PORT || 3000;

const app = express()

app.use(helmet());
app.use(serveStatic(path.join(__dirname, 'public/images')))
app.listen(PORT, () => {
    console.log(`NODE STATIC SERVER is on PORT ${PORT}.`);
});