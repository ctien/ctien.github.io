const path = require('path')
module.exports = {
    entry: './cv/index.js',
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'cv.js'
    }
}