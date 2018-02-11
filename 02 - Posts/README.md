# 02 - Getting Posts

[DEUTSCH](https://steemit.com/steemit/@lustigo/02-posts-or-steem-js-tutorial-deutsch)| ENGLISH

The tutorials are being published in an english and german version. The code for the complete tutorial is accessible on [Github](https://github.com/lustigo/steem-js-tutorial). There is a directory for each chapter.

Today we want to show the titles of the last 30 posts with the tag "blockchain".

We should first learn about three concepts:
1. Callback-Functions
2. Objects
3. Loops

## 1. Callback-Functions
We have used callback-functions already, but only console.log. Today we have to clean the data before we output it. so we have to write our own callback-function.
A callback-function has 2 parameters: Errors and the Data.
In the last chapters we have seen, that there was first the output "null". That was the error and "null" means, that there was none. After that the data objects were shown.

## 2. Objects
Objectorientation is a basic concept in programming. We are trying to represent real objects with their methods and properties in code.
Javascript uses "JSON". JSON stands for Javascript Object Notation. This is being used in other programming languages, as well.
The data objects in the last chapters were also in the JSON format.
You could represent a shoe in JSON like:
````JSON
{
  "color": "red",
  "size": 11,
  "brand": "ShoeCompany"
}
````
Here you can see, that a objects starts with a `{` and ends with a `}`. In the mid you can see the properties declaration, like variables. 
The name of the property will be in quotes, then a `:` and the value that should be assigned to the property. 
If another property is following you have to seperate them with a comma.

## 3. Loops
A loop is being used for repeating code multiple times.

# Implementation
That's it for the theory. Now we start again with a new file named "posts.js":
````javascript
const steem = require("steem");
````
After we have imported the library we are creating our callback-function. We save that also in a constant (because we do not want to overwrite the function) to pass it easily to the Steem Api later on.
````javascript
const callback = function(error,data){

};
````
We are initializing the function, which recieves the parameters "error" and "data". That are just variables, that you can name freely. Errors will always be the first parameter, followed by the data.
A function is surrounded, like JSON-Objects, with curly braces.
Now we are filling our function with life:
````javascript
const callback = function(error,data){
  for(let post of data){

  }
};
````
We start with a "for"-loop. That is also surrounded by curly braces. `let post of data` means, that for every element in the data-array (you maybe know arrays from the first chapter) we are executing the code inside the loop. And we can access the properties of the element with the `post` variable.
We could write the code inside the loop 30 times if we don't want to use the loop. But with the loop it is easier, maintainable and prettier.
We want only to print the title of the post, so we use console.log here:
````javascript
const callback = function(error,data){
  for(let post of data){
    console.log(post.title);
  }
};
````
Perfect, now we have our callback-function!
Next we have to define a JSON-Object, which describes the posts we want to recieve.
````javascript
const query = {
  tag: "blockchain",
  limit: "30"
};
````
We save that object in a constant variable. You see that "tag" and "limit" do not have quotes here, because we are directly inside javascript code.
Now we are calling the Steem.Js Api and give it our query and callback-function:
````javascript
steem.api.getDiscussionsByCreated(query,callback);
````
That's it!
As always we test the program with `node posts` and should now see 30 titles of the latests posts wit the tag "blockchain".

See you next time!