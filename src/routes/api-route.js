const express = require('express')
const router = express.Router()

//controllers
const registerControllers = require('../app/controllers/register-controllers')
const loginControllers = require('../app/controllers/login-controllers')
const updateProfileControllers = require('../app/controllers/update-profile-controllers')
const updatePasswordControllers = require('../app/controllers/update-password-controllers')
//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

router.post('/register', registerControllers.register)

router.post('/login', loginControllers.login)

router.patch('/update-profile', checkRoleControllers.checkLogin, updateProfileControllers.updateProfile)

router.patch('/update-password', checkRoleControllers.checkLogin, updatePasswordControllers.updatePassword)

router.get('/test-login', checkRoleControllers.checkLogin, (req, res, next)=>{
    res.json('bạn đã đăng nhập!')
})

router.get('/test-admin', checkRoleControllers.checkAdmin, (req, res, next)=>{
    res.json('bạn là admin!')
})

module.exports = router