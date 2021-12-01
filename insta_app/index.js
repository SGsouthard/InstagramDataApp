const { Users, Posts, Comments } = require('./models')

/*
Models

Users
--
name:string,
username:string,
password:string,
website:string,
posts:integer,
followers:integer,
following:integer,
email:string,
phonenumber:integer

Posts
--
username:string,
location:string,
time: date,
likes:integer,
comments:integer

Comments
--
username:string,
comment:string,
time:date,
likes:integer,
replies:integer


*/

// sequelize model:create --name Users --attributes name:string,username:string,password:string,website:string,posts:integer,followers:integer,following:integer,email:string,phonenumber:integer
// sequelize model:create --name Posts --attributes username:string,location:string,time:date,likes:integer,comments:integer
// sequelize model:create --name Comments --attributes username:string,comment:string,time:date,likes:integer,replies:integer

Users.create({
    name:'Sydney Good-Southard',
    username:'goodsouthard',
    password:'bananas',
    website:'https://www.youtube.com/watch?v=hEBikTPF37c',
    posts:100,
    followers:100,
    following:100,
    email:'sydney@email.com',
    phonenumber: 1234567890
})
.then(function(newUser){
    console.log('new user created', newUser.toJSON());
})
.catch(function(error){
    console.log('user not created', error);
});