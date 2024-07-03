const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'Server')));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'Server'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Server', 'index.html'));
});

const port = process.env.PORT || 8182;
app.listen(port, () => {
  console.log(`Listening in ${port}`);
});