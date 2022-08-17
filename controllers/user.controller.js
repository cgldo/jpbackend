// user controller
const User = require('../models/user.model')
const router = require('express').Router()


router.route('/post').post((req, res) => {
    const newUser = new User(req.body)
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/get').get((req, res) => {
    // using .find() without a paramter will match on all user instances
    User.findOne({username:req.body.username, password:req.body.password})
        .then(result => res.json(result))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/delete').delete((req, res) => {
    User.deleteOne({ username: req.body.username, password:req.body.password})
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/postscore').post((req, res) => {
    User.updateOne({username:req.body.username, password:req.body.password}, { $set: {
        score:req.body.score}})
        .then(result => res.json(result))
        .catch(err => res.status(400).json('Error! ' + err))
})


module.exports = router
 
//test route http://localhost:5000/users