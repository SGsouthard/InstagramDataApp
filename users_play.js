const { Users, Posts, Comments } = require('./models')

// USERS 
// -----
// CREATE
// --
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

const { Op } = require("sequelize");
Users.findOne({
    where: {name: { [Op.notLike]:'%ni'},
            username: {[Op.like]: '%ub%'}}
}).then(foundOneUser =>{
    console.log(foundOneUser.toJSON());
}).catch(function(error){
    console.log('find one User failed', error);
});

const { Op } = require("sequelize");
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

const { Op } = require("sequelize");
Users.findAll({
    where: { followers: {[Op.between]: [25, 50]}}
})
.then(foundAllUsers =>{
     console.log(foundAllUsers)
}).catch(function(error){
     console.log('find all Users failed', error)
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