const path = require('path')
module.exports = {
    entry: './portfolio/index.js',
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'portfolio.js'
    }
}