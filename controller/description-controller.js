import DescriptionModel from '../Models/description-model.js'

class DescriptionController {
    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query
        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 10000
        

        const result = await DescriptionModel.findAll( {
            attributes:['id', 'name', 'description'],
            order: [order],
            limit: limit
        })
        res.json(result)
    }

    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await DescriptionModel.findOne({
            attributes: ['id', 'name', 'description', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }


    create = async (req, res) => {
        const { name, description } = req.body;

        if(name && description) {
            const model = await DescriptionModel.create(req.body)
            res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }

    }

    update = async (req, res) => {
        const { id } = req.params || 0

        const { name, description } = req.body;

        if(name && description) {
            const model = await DescriptionModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({ msg: 'Massage updated' })
        } else {
            res.sendStatus(418)
        }
    }
}

export default DescriptionController