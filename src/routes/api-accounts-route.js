const express = require('express')
const router = express.Router()

//controllers
const registerControllers = require('../app/controllers/accounts/register-controllers')
const loginControllers = require('../app/controllers/accounts/login-controllers')
const updateProfileControllers = require('../app/controllers/accounts/update-profile-controllers')
const updatePasswordControllers = require('../app/controllers/accounts/update-password-controllers')
const getProfileControllers = require('../app/controllers/accounts/get-profile-controllers')
const softDeleteAccControllers = require('../app/controllers/admin/accounts/delete/soft-delete-acc-controllers')
const restoreAccControllers = require('../app/controllers/admin/accounts/delete/restore-acc-controllers')
const forceDeleteAccControllers = require('../app/controllers/admin/accounts/delete/force-delete-acc-controllers')
const logoutControllers = require('../app/controllers/accounts/logout-controllers')
//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

//route list
router.post('/register', registerControllers.register)

router.post('/login', loginControllers.login)

router.delete('/logout', checkRoleControllers.checkLogin, logoutControllers.logout)

router.patch('/update-profile', checkRoleControllers.checkLogin, updateProfileControllers.updateProfile)

router.patch('/update-password', checkRoleControllers.checkLogin, updatePasswordControllers.updatePassword)

router.get('/get-profile', checkRoleControllers.checkLogin, getProfileControllers.getProfile)

router.delete('/soft-delete-acc/:id', checkRoleControllers.checkAdmin, softDeleteAccControllers.softDeleteAcc)

router.patch('/restore-acc/:id', checkRoleControllers.checkAdmin, restoreAccControllers.restoreAcc)

router.delete('/force-delete-acc/:id', checkRoleControllers.checkAdmin, forceDeleteAccControllers.forceDeleteAcc)

module.exports = router