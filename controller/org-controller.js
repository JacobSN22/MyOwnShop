import OrgModel from '../Models/org-model.js'

class OrgController {
    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query
        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 1000
        

        const result = await OrgModel.findAll( {
            attributes:['id', 'title', 'address'],
            order: [order],
            limit: limit
        })
        res.json(result)
    }

    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await OrgModel.findOne({
            attributes: ['id', 'title', 'address', 'zipcode', 'city', 'country', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }


    create = async (req, res) => {
        const { title, address, zipcode, city, country } = req.body;

        if(title && address && zipcode && city) {
            const model = await OrgModel.create(req.body)
            res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }

    }

    update = async (req, res) => {
        const { id } = req.params || 0

        const { title, address, zipcode, city, country } = req.body;

        if(title && address && zipcode && city) {
            const model = await OrgModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({ msg: 'Massage updated' })
        } else {
            res.sendStatus(418)
        }
    }
}

export default OrgController