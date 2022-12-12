import ChampModel from '../Models/champs-model.js'

class ChampController {
    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query
        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 1000
        

        const result = await ChampModel.findAll( {
            attributes:['id', 'name', 'role'],
            order: [order],
            limit: limit
        })
        res.json(result)
    }

    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await ChampModel.findOne({
            attributes: ['id', 'name', 'role', 'difficulty', 'price', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }


    create = async (req, res) => {
        const { name, role, difficulty, price } = req.body;

        if(name && role && difficulty && price) {
            const model = await ChampModel.create(req.body)
            res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }

    }

    update = async (req, res) => {
        const { id } = req.params || 0

        const { name, role, difficulty, price } = req.body;

        if(name && role && difficulty && price) {
            const model = await ChampModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({ msg: 'Massage updated' })
        } else {
            res.sendStatus(418)
        }
    }
}

export default ChampController