const { Users, Posts, Comments } = require('./models')
const { Op } = require("sequelize");

/*
Models
--
Users
--
name:string,
username:string,
password:string,
website:string,
posts:integer,
followers:integer,
following:integer,
email:string
--
Posts
--
username:string,
location:string,
time: date,
likes:integer,
comments:integer
--
Comments
--
username:string,
comment:string,
time:date,
likes:integer,
replies:integer
*/

// sequelize model:create --name Users --attributes name:string,username:string,password:string,website:string,posts:integer,followers:integer,following:integer,email:string
// sequelize model:create --name Posts --attributes username:string,location:string,time:date,likes:integer,comments:integer
// sequelize model:create --name Comments --attributes username:string,comment:string,time:date,likes:integer,replies:integer


// // USERS 
// // -----
// // CREATE
// // --
Users.create({
    name:'Billy Southard',
    username:'billysouthard',
    password:'booze',
    website:'https://www.youtube.com/watch?v=hEBikTPF37c',
    posts:100,
    followers:100,
    following:100,
    email:'billy@email.com',
})
.then(function(newUser){
    console.log('new user created', newUser.toJSON());
})
.catch(function(error){
    console.log('user not created', error);
});
//
// FindOne
// --
Users.findOne({
    where: {name: 'Billy Southard',}
}).then(foundOneUser =>{
    console.log(foundOneUser.toJSON());
}).catch(function(error){
    console.log('find one User failed', error);
});

Users.findOne({
    where: {name: { [Op.notLike]:'%ni'},
            username: {[Op.like]: '%ub%'}}
}).then(foundOneUser =>{
    console.log(foundOneUser.toJSON());
}).catch(function(error){
    console.log('find one User failed', error);
});

Users.findOne({
    where: {name: { [Op.startsWith]:'Tra'}}
}).then(foundOneUser =>{
    console.log(foundOneUser.toJSON());
}).catch(function(error){
    console.log('find one User failed', error);
});
//
// FindAll
//--
Users.findAll()
.then(foundAllUsers =>{
    console.log(foundAllUsers)
}).catch(function(error){
    console.log('find all Users failed', error)
});

Users.findAll({
    where: { followers: {[Op.between]: [25, 50]}}
})
.then(foundAllUsers =>{
     console.log(foundAllUsers)
}).catch(function(error){
     console.log('find all Users failed', error)
});

// Find Or Create
//--
Users.findOrCreate({
    where: {
        name:'Dolan Trulp',
    },
    defaults: { 
        username:'dolantrulp',
        password:'big_money',
        website:'https://www.youtube.com/watch?v=MlW7T0SUH0E',
        posts: 6969,
        followers: 52,
        following: 0,
        email:'dolan@email.com'
     }
}).then(([user, created])=>{
    console.log(user);
});

// findByPk
//--
Users.findByPk(6)
.then(foundUserPk =>{
    console.log(foundUserPk.toJSON());
}).catch(function(error){
    console.log('find one user by pk failed', error);
});

// UPDATE
//--
Users.update(
    { followers: 75 }, 
    { where: { id: 8}
}).then(numRowsChanged=>{
    console.log(numRowsChanged)
    console.log(Users.update)
}).catch(function(error){
    console.log('update failed', error)
});

Users.update(
    { following: 42069 }, 
    { where: { id: 5}
}).then(numRowsChanged=>{
    console.log(numRowsChanged)
    console.log(Users.update)
}).catch(function(error){
    console.log('update failed', error)
});

// DESTROY
//--
Users.destroy({
    where: { id: '3' }
}).then(numRowsDeleted=>{
    console.log('Bye bye User', numRowsDeleted)
}).catch(function(error){
    console.log('delete failed', error)
});

// POSTS
// -----
// CREATE
Posts.create({
    username:'dolantrulp',
    location:'hell',
    time: 2021-11-30,
    likes: 0,
    comments: 0
})
.then(function(newPost){
    console.log('new post created', newPost.toJSON());
})
.catch(function(error){
    console.log('post not created', error);
});
// FindOne
// --
Posts.findOne({
    where: {username: 'dolantrulp',}
}).then(foundOnePost =>{
    console.log(foundOnePost.toJSON());
}).catch(function(error){
    console.log('find one Post failed', error);
});

Posts.findOne({
    where: {username: { [Op.like]:'%rulp'},
            likes: {[Op.lt]: 10}}
}).then(foundOnePost =>{
    console.log(foundOnePost.toJSON());
}).catch(function(error){
    console.log('find one Post failed', error);
});

Posts.findOne({
    where: {username: { [Op.endsWith]:'afe'}}
}).then(foundOnePost =>{
    console.log(foundOnePost.toJSON());
}).catch(function(error){
    console.log('find one Post failed', error);
});
//
// FindAll
//--
Posts.findAll()
.then(foundAllPosts =>{
    console.log(foundAllPosts)
}).catch(function(error){
    console.log('find all Posts failed', error)
});

Posts.findAll({
    where: { comments: {[Op.gt]: 400}}
})
.then(foundAllPosts =>{
     console.log(foundAllPosts)
}).catch(function(error){
     console.log('find all Posts failed', error)
});

// findByPk
//--
Posts.findByPk(6)
.then(foundUserPk =>{
    console.log(foundUserPk.toJSON());
}).catch(function(error){
    console.log('find one user by pk failed', error);
});

// UPDATE
//--
Posts.update(
    { likes: 9001 }, 
    { where: { id: 8}
}).then(numRowsChanged=>{
    console.log(numRowsChanged)
    console.log(Posts.update)
}).catch(function(error){
    console.log('update failed', error)
});

Posts.update(
    { location: 'outer space' }, 
    { where: { id: 5}
}).then(numRowsChanged=>{
    console.log(numRowsChanged)
    console.log(Posts.update)
}).catch(function(error){
    console.log('update failed', error)
});

// DESTROY
//--
Posts.destroy({
    where: { id: '7' }
}).then(numRowsDeleted=>{
    console.log('Bye bye User', numRowsDeleted)
}).catch(function(error){
    console.log('delete failed', error)
});

// COMMENTS
// --------
// CREATE
Comments.create({
    username:'billysouthard',
    comment:'hello',
    time:1991-06-29,
    likes:432,
    replies:567
})
.then(function(newComment){
    console.log('new Comment created', newComment.toJSON());
})
.catch(function(error){
    console.log('Comment not created', error);
});

// FindOne
// --
Comments.findOne({
    where: {likes: {[Op.notBetween]: [22,66]},}
}).then(foundOneUser =>{
    console.log(foundOneUser.toJSON());
}).catch(function(error){
    console.log('find one comment failed', error);
});

Comments.findOne({
    where: {username: 'neko.cat.cafe'}
}).then(foundOneUser =>{
    console.log(foundOneUser.toJSON());
}).catch(function(error){
    console.log('find one comment failed', error);
});

Comments.findOne({
    where: {username: { [Op.startsWith]:'map'}}
}).then(foundOneUser =>{
    console.log(foundOneUser.toJSON());
}).catch(function(error){
    console.log('find one comment failed', error);
});
//
// FindAll
//--
Comments.findAll()
.then(foundAllComments =>{
    console.log(foundAllComments)
}).catch(function(error){
    console.log('find all Comments failed', error)
});

Comments.findAll({
    where: { replies: {[Op.gte]: 33}}
})
.then(foundAllComments =>{
     console.log(foundAllComments)
}).catch(function(error){
     console.log('find all Comments failed', error)
});

// findByPk
//--
Comments.findByPk(2)
.then(foundUserPk =>{
    console.log(foundUserPk.toJSON());
}).catch(function(error){
    console.log('find one comment by pk failed', error);
});

// UPDATE
//--
Comments.update(
    { comment: 'Beautiful!' }, 
    { where: { username: 'momculley'}
}).then(numRowsChanged=>{
    console.log(numRowsChanged)
    console.log(Comments.update)
}).catch(function(error){
    console.log('update failed', error)
});

Comments.update(
    { likes: 42069 }, 
    { where: { replies: 24}
}).then(numRowsChanged=>{
    console.log(numRowsChanged)
    console.log(Comments.update)
}).catch(function(error){
    console.log('update failed', error)
});

// DESTROY
//--
Comments.destroy({
    where: { id: '7' }
}).then(numRowsDeleted=>{
    console.log('Bye bye User', numRowsDeleted)
}).catch(function(error){
    console.log('delete failed', error)
});