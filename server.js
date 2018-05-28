const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use(serveStatic(path.join(__dirname, 'public/images')))
app.listen(3000, () => {
    console.log("PORT 3000");
});