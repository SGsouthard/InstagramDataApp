const { Users, Posts, Comments } = require('./models')

// POSTS
// -----
// Posts.create({
//     username:'dolantrulp',
//     location:'hell',
//     time: 2021-11-30,
//     likes: 0,
//     comments: 0
// })
// .then(function(newPost){
//     console.log('new post created', newPost.toJSON());
// })
// .catch(function(error){
//     console.log('post not created', error);
// });
// FindOne
// --
Posts.findOne({
    where: {username: 'dolantrulp',}
}).then(foundOnePost =>{
    console.log(foundOnePost.toJSON());
}).catch(function(error){
    console.log('find one Post failed', error);
});

const { Op } = require("sequelize");
Users.findOne({
    where: {username: { [Op.like]:'%rulp'},
            likes: {[Op.lt]: 10}}
}).then(foundOnePost =>{
    console.log(foundOnePost.toJSON());
}).catch(function(error){
    console.log('find one Post failed', error);
});

const { Op } = require("sequelize");
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

const { Op } = require("sequelize");
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