import UserModel from '../Models/user-model.js'

class UserController {
    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query
        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 10000
        

        const result = await UserModel.findAll( {
            attributes:['id', 'role'],
            order: [order],
            limit: limit
        })
        res.json(result)
    }

    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await UserModel.findOne({
            attributes: ['id', 'firstname', 'lastname', 'username', 'password', 'email', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }


    create = async (req, res) => {
        const { firstname, lastname, username, password, email } = req.body;

        if(firstname && lastname && username && password && email) {
            const model = await UserModel.create(req.body)
            res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }

    }

    update = async (req, res) => {
        const { id } = req.params || 0

        const { firstname, lastname, username, password, email } = req.body;

        if(firstname && lastname && username && password && email) {
            const model = await UserModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({ msg: 'Massage updated' })
        } else {
            res.sendStatus(418)
        }
    }
}

export default UserController