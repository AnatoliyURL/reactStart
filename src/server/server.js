import express from 'express'
import ReactDom from 'react-dom/server'
import {Header} from "../shared/Header";
import {indexTemplate} from "./indexTempale";

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDom.renderToString(Header()))
    )
})

app.listen(3000, () => {
    console.log('Start server')
})