const express = require('express');

const app = express();
const PORT = process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/notes', require('./routes/apiroutes'));
app.use('/', require('./routes/htmlroutes'));

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});