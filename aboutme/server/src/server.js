/**
 * Entry third party
 */
const Express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')


/**
 * Middleware
 */


/**
 * Entry router
 */


/**
 * Config
 */
const serverConfig = require('./config')
const app = Express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(Express.static(path.join(__dirname, '../../client/public')));


const initHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,700i&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script src="./dist/main.js"></script>
</body>
</html>
`

/**
 * Use router
 */
app.use('/', (req, res) => {
    res.send(initHtml);
})




app.listen(serverConfig.PORT, (error) => {
    if (!error) {
        console.log('server is running at', serverConfig.PORT);
    }
})

module.exports = app;
