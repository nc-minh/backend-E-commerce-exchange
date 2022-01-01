class RegisterControllers{
    register(req, res, next){
        const username = req.body.username
        const password = req.body.password

        console.log(username, password)

        res.json('oki la')
    }
}

module.exports = new RegisterControllers