const useArgs = process.argv.slice(2);

const Author = require("./models/author");
const Post = require("./models/posts");
const User = require("./models/user");
const Comment = require("./models/comments");

const authors = [];
const posts = [];
const users = [];
const comments = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = useArgs[0];

main().catch((err) => console.log(err));
async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createAuthors();
  await createPosts();
  await createUsers();
  await createComments();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function authorCreate(index, name, email, password, canPost, posts) {
  const authordetail = {
    name: name,
    email: email,
    password: password,
    canPost: canPost,
    posts: posts,
  };

  const author = new Author(authordetail);

  await author.save();
  authors[index] = author;
  console.log(`Added author: ${name}`);
}

async function userCreate(index, name, comments) {
  const userdetail = { name: name, comments: comments };

  const user = new User(userdetail);
  await user.save();
  users[index] = user;
  console.log(`Added user: ${name}`);
}

async function postCreate(index, title, body, author, status, dateCreated) {
  const postdetail = { title: title, body: body, author: author };
  if (status != false) postdetail.status = status;
  if (dateCreated != false) postdetail.date_created = dateCreated;

  const post = new Post(postdetail);
  await post.save();
  posts[index] = post;
  console.log(`Added post: ${title}`);
}

async function commentCreate(index, author, body, date) {
  const commentdetail = { author: author, body: body };
  if (date != false) commentdetail.date = date;

  const comment = new Comment(commentdetail);
  await comment.save();
  comments[index] = comment;
  console.log(`Added comment: ${author}`);
}

async function createAuthors() {
  console.log("Adding author");
  await authorCreate(
    0,
    "Bryan Fines",
    "bryanfinesw@gmail.com",
    "superstrongpassword",
    true
  );
}

async function createPosts() {
  console.log("Adding posts");
  await Promise.all([
    postCreate(
      0,
      "The Programming Delay",
      "I really want to give as much information here as possible.. but honestly I can not think of a lot to say.. so I guess I will just ramble on.",
      authors[0],
      "Active",
      "2024-01-12"
    ),
    postCreate(
      1,
      "Learning to Code",
      "Learning to code this project was an absolute blast. Especially working on a custom seeding script that was able to populate any information I needed to test the API with.",
      authors[0],
      "Active",
      "2024-03-14"
    ),
    postCreate(
      2,
      "Testing is it Necessary?",
      "Testing is a fantastic thing to look into.. However as of right now I can not think of what else to write so I am just going to leave this here until I can come back to it.",
      authors[0],
      "Pending",
      "2024-04-01"
    ),
  ]);
}

async function createUsers() {
  console.log("Adding users");
  await Promise.all([
    userCreate(0, "Bob Anderson", comments[0]),
    userCreate(1, "Jacob Smith", comments[1]),
    userCreate(2, "Carlos", comments[(2, 3, 4)]),
    userCreate(3, "Mao", comments[(5, 6, 7)]),
  ]);
}

async function createComments() {
  console.log("Adding comments");
  await Promise.all([
    commentCreate(
      0,
      users[0],
      "This was an insightful blog to read!",
      "2024-03-15"
    ),
    commentCreate(
      1,
      users[1],
      "Would probably be nice if this blog post was a little longer."
    ),
    commentCreate(2, users[2], "Good job!", "2024-04-01"),
    commentCreate(
      3,
      users[2],
      "This post doesn't meet our rules, please read them here.",
      "2024-04-03"
    ),
    commentCreate(4, users[2], "Carlos was here!", "2024-04-21"),
    commentCreate(5, users[3], "It's Mao TIME!"),
    commentCreate(
      6,
      users[3],
      "I think Bryan should look into contributing a lot more!",
      "2024-04-18"
    ),
    commentCreate(
      7,
      users[3],
      "This was an insightful read.. However I did notice one grammatical error, right here on line 23.",
      "2024-03-01"
    ),
  ]);
}
