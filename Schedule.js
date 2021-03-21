const schedule = require('node-schedule');
const request = require('request');

schedule.scheduleJob('* * * * *', () => {
  healthCheck();
});

const healthCheck = async () => {
  await request('https://foodgenerateapi.herokuapp.com/health', (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
}