const express = require('express');
const app = express();
const schedule = require('node-schedule');
const axios = require('axios');

const port = process.env.PORT || 80;

let i = 0;
const time = new Date().toLocaleString();


schedule.scheduleJob('*/5 * * * *', () => {
  healthCheck();

  if (healthCheck) ++i;
    console.log(`${time} requesting ${i} times`);
});

app.get('/', (req, res) => {
  res.send('Hello WOrld!');
})

const healthCheck = async () => {
  await axios.get('https://foodgenerateapi.herokuapp.com/health')
    .then(({ data }) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error);
    });
}

app.listen(port, () => {
  console.log(`${time} Start cronjob...`);
})