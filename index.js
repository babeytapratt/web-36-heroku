const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const port = process.env.PORT || 4000

console.log('web 36 rocks')
console.log(__dirname)
console.log(process.env.USERNAME)
console.log(process.env.PORT)
console.log(process.env.LADY)
console.log(process.env.FOO)
console.log(process.env.ALWAYS)
console.log(process.env.LIKE)

const app = express()

app.use('/api/*', (_, res) => {
    res.json({ data: 'web 36 rocks' })
});

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
