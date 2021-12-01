const { Users, Posts, Comments } = require('./models')


// // // COMMENTS
// // // --------
// Comments.create({
//     username:'sydneygoodsouthard',
//     comment:'nice job',
//     time:1991-06-29,
//     likes:23,
//     replies:25
// })
// .then(function(newComment){
//     console.log('new Comment created', newComment.toJSON());
// })
// .catch(function(error){
//     console.log('Comment not created', error);
// });

//
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