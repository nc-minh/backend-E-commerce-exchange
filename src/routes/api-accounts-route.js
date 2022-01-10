const express = require('express')
const router = express.Router()

//controllers
const registerControllers = require('../app/controllers/accounts/register-controllers')
const loginControllers = require('../app/controllers/accounts/login-controllers')
const updateProfileControllers = require('../app/controllers/accounts/update-profile-controllers')
const updatePasswordControllers = require('../app/controllers/accounts/update-password-controllers')
const getProfileControllers = require('../app/controllers/accounts/get-profile-controllers')
const softDeleteAccControllers = require('../app/controllers/accounts/delete/soft-delete-acc-controllers')
//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

//route list
router.post('/register', registerControllers.register)

router.post('/login', loginControllers.login)

router.patch('/update-profile', checkRoleControllers.checkLogin, updateProfileControllers.updateProfile)

router.patch('/update-password', checkRoleControllers.checkLogin, updatePasswordControllers.updatePassword)

router.get('/get-profile', checkRoleControllers.checkLogin, getProfileControllers.getProfile)

router.delete('/soft-delete-acc/:id', checkRoleControllers.checkAdmin, softDeleteAccControllers.softDeleteAcc)




module.exports = router