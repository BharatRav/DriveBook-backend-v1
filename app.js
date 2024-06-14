const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("index", { title: "Drive Book" });
})

app.use('/auth', require('./routes/auth.route'))

app.listen(port, () => {
    console.log(`Drive app listening at http://localhost:${port}`)
})