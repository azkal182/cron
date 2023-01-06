// Import your scheduler code
const { scheduleMessage } = require('../scheduler');

// Write your serverless function
exports.handler = async (event, context) => {
  // This function will be called by the cron trigger
  // You can use it to run the code for scheduling actions
  scheduleMessage();

  // Return a response to acknowledge that the function has been executed
  return {
    statusCode: 200,
    body: 'Scheduled message'
  };
}

