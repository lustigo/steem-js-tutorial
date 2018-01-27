// Load the Steem Library
const steem = require('steem');
// Get the Information about the User ned and print it to the terminal
steem.api.getAccounts(['ned'], console.log);