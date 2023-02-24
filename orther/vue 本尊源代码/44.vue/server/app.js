const express = require('express');
const bodyParser = require('body-parser');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-methods', 'POST,GET');
  next();
});

app.post('/get_news', (req, res) => {
  const nid = req.body.nid;
  const newsData = JSON.parse(readFileSync(resolve(__dirname, './data.json'), 'utf8'));

  let lastIdx = 0;

  if (nid) {

    if (nid != newsData[newsData.length - 1].id) {
      lastIdx = newsData.findIndex(item => item.id == nid);

      res.send({
        error_no: 0,
        error_msg: 'ok',
        data: newsData.slice(lastIdx + 1)
      })
    } else {
      res.send({
        error_no: 0,
        error_msg: 'ok',
        data: null
      })
    }
  } else {
    res.send({
      error_no: 0,
      error_msg: 'ok',
      data: newsData
    })
  }

})

app.listen(3000, () => {
  console.log('Welcome');
})