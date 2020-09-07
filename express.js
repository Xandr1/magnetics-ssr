const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
	res.send({
		username: 'alex',
		password: '12345H'
	})
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
