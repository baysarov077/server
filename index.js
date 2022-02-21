let express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Hello'))
app.use(require('./routes/brands.js'))
app.use(require('./routes/products.js'))

app.listen(port,() => console.log('example'))


