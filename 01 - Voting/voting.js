//Import Library
const steem = require("steem");
//define your Postin-private-key
const wif = 'XXXXX';
//define your username
const voter = 'yourUsername';
//define the username of the author
const author = 'usernameOfAuthor';
//define last part of the address of the post
const permlink = 'lastPartOfTheUrl';
//define the weight
const weight = 10000;

//send the vote to the blockchain
steem.broadcast.vote(wif,voter,author,permlink,weight,console.log);