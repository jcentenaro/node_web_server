const express = require('express')
// import  express from 'express'
const path = require('path')
// import path from 'path'

const startServer = (options) => {
    const { port, public_path = "public" } = options
    
    const app = express()
    
    //Parar poder usar middlewares se usa la palabra app
    app.use(express.static(public_path)) //contenido estaico que ponemos didsponible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_pat})/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Escuchando en puerto ${port}`)
    })
}

module.exports = {
    startServer
}