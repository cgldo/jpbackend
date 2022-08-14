// user controller
const User = require('../models/user.model')
const router = require('express').Router()


router.route('/new').post((req, res) => {
    const newUser = new User(req.body)
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/find/:username/password/:password').get((req, res) => {
    // using .find() without a paramter will match on all user instances
    User.findOne({username:req.params.username, password:req.params.password})
        .then(result => res.json(result))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})


module.exports = router