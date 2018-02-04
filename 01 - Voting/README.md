# 01 - Voting

[DEUTSCH](https://steemit.com/deutsch/@lustigo/01-voten-or-steem-js-tutorial-deutsch) | ENGLISH

The tutorials are being published in an english and german version. The code for the complete tutorial is accessible on [Github](https://github.com/lustigo/steem-js-tutorial). There is a directory for each chapter.

Today we want to vote a post.
First we are checking the documentation of our library [Steem.js](https://github.com/steemit/steem-js/tree/master/doc#broadcast-api) and we find this codesnippet:

````javascript
steem.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
  console.log(err, result);
});
````
This means, that we can use the function `broadcast.vote` to vote a post.
But we need some parameters.
First of all we need the WIF (Wallet Import Format). 
You find that in your Steemit Wallet under "Permissions" and then "Posting".
Click the button "Show Private Key" on the right, first to get the right one.
Don't post that one!
We create a new file and name it "voting.js" and import our library:
````javascript
const steem = require("steem");
````
You already know what that line does.
Now we are defining our WIF-key (here only shown as "XXXXX"):
````javascript
const wif = 'XXXXX';
````
Like in the last part we are defining a constat variable, which we are naming "wif" and assining a String: our voting key.
(For advanced programmers: you can use enviromental variables here)
Next one is the voter, that's you!
Enter here your username:
````javascript
const voter = 'yourUsername';
````
Author is the author of the post that you want to vote.
This is also a constant.
````javascript
const author = 'usernameOfAuthor';
````
The permlink is the last part of the URL on steemit.com of the post, e.g. `part-1-how-to-configure-the-steempy-cli-wallet-and-upvote-an-article-with-steem-python` or `00-introduction-or-steem-js-tutorial`.
````javascript
const permlink = 'letzerPartderAdresse';
````
Weight is a bit more complicated. 
Here you have to define how many percent you want to vote. 
But the value is a integer.
1% equals the number 100, 100% 10000 and 0.01% 1.
If you want to vote 100% you have to write:
````javascript
const weight = 10000;
````
That's it!
We now have everything we need.
The last variable is the callback-function, but we do not use it at the moment.
Again we are using `console.log` to print the result on the terminal.
And now we are calling the function:
````javascript
steem.broadcast.vote(wif,voter,author,permlink,weight,console.log);
````
That's finally it!
In the browser, when you are clicking on the thumb, the website is doing these things for you.
This one is more complicated, but you can for example use it to let a bot vote for you (later on).
But now we are testing our code:
Type `node voting` in your terminal and you should see something like this:
![information about successfull vote](https://image.ibb.co/dUyk66/Auswahl_001.png)
On steemworld.org/@yourUsername you can check afterwards if your vote is on the blockchain.

See you next time!
