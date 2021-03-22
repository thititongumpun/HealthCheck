const schedule = require('node-schedule');
const axios = require('axios');

schedule.scheduleJob('0 */2 * * *', () => {
  healthCheck();
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
