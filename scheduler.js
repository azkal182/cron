// Import the node-cron library
const cron = require('node-cron');
const token = "5730954289:AAGDPIDwIyhae6aQwb7Y4T7_Gf6PrhyPd30";
const chatId = "404000198";
// Write your code for scheduling actions here
// For example, to send a message every minute:
async function sendMessage(messages) {
 const message = encodeURIComponent(messages);
 const options = {
  hostname: "api.telegram.org",
  port: 443,
  path: `/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`,
  method: "POST",
 };
 const req = https.request(options, (res) => {
  //console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
   process.stdout.write(d);
  });
 });

 req.on("error", (error) => {
  console.error(error);
 });

 req.end();
}
const scheduleMessage = () => {
  cron.schedule('* * * * *', () => {
    sendMessage('Sending message every minute')
    console.log('Sending message every minute');
  });
}

// You can also perform other actions, such as making HTTP requests or interacting with a database

// Make sure to export your function
module.exports = {
  scheduleMessage
}

