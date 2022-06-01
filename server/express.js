const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get(/\.(js|css|map|ico|gif|jpeg|jpg|png|svg)$/,
    express.static(path.resolve(__dirname, '..', 'dist')))

app.use('*', (req, res) => {
    let indexHtml = fs.readFileSync(path.resolve(__dirname, '..' ,'dist', 'index.html'), {
        encoding: 'utf-8'
    })
    res.contentType('text/html')
    res.status(200)

    return res.send(indexHtml)
})

app.listen('9000', () => {
    console.log('http://localhost:9000')
})