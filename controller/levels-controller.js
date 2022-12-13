import LevelModel from '../Models/levels-model.js'

class LevelController {
    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query
        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 10000
        

        const result = await LevelModel.findAll( {
            attributes:['id', 'level'],
            order: [order],
            limit: limit
        })
        res.json(result)
    }

    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await LevelModel.findOne({
            attributes: ['id', 'level', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }


    create = async (req, res) => {
        const { level } = req.body;

        if(level) {
            const model = await LevelModel.create(req.body)
            res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }

    }

    update = async (req, res) => {
        const { id } = req.params || 0

        const { level } = req.body;

        if(level) {
            const model = await LevelModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({ msg: 'Massage updated' })
        } else {
            res.sendStatus(418)
        }
    }
}

export default LevelController