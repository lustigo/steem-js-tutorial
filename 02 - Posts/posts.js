//import the library
const steem = require("steem");
//define the callback function: first we get the error and then the data
const callback = function(error,data){
    //We are iterating over every element(post) of the data-array
    for(let post of data){
      //We are printing the title of every post
      console.log(post.title);
    }
  };
//We are defining our query, that the posts should have the tag "blockchain" and we want 30 posts.
const query = {
    tag: "blockchain",
    limit: "30"
  };
//We are calling the Steem Api with our query and our callback-function
steem.api.getDiscussionsByCreated(query,callback);
