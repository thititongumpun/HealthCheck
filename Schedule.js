const schedule = require('node-schedule');
const axios = require('axios');

let i = 0;

schedule.scheduleJob('*/5 * * * *', () => {
  console.log('Start request...........')
  
  healthCheck();

  if (healthCheck) ++i;
    console.log('Requesting ${i} times');
});

const healthCheck = async () => {
  await axios.get('https://foodgenerateapi.herokuapp.com/health')
    .then(({ data }) => {
      console.log(data)
    })
    .catch((error) => {
    console.log(error);
    });
}
