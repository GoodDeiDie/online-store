const ApiError = require('../Error/ApiError')

class UserController {
    async registration(req, res){

    }

    async login(req, res){
        
    }

    async chek(req, res, next){
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('Не задан ID!'))

        }
        res.json(id)
    }
}

module.exports = new UserController()