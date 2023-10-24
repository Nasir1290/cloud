const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'dist')));
app.get('*'),(req,res) => {
    res.sendFile(path.join(__dirname,'dist','index.html'))
}

app.listen(8080, () => {
    console.log('app listen on port 8080')
})