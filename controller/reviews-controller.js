import ReviewModel from '../Models/reviews-model.js'

class ReviewController {
    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query
        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 10000
        

        const result = await ReviewModel.findAll( {
            attributes:['id', 'title', 'username'],
            order: [order],
            limit: limit
        })
        res.json(result)
    }

    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await ReviewModel.findOne({
            attributes: ['id', 'title', 'username', 'review', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }


    create = async (req, res) => {
        const { title, username, review } = req.body;

        if(title && username && review) {
            const model = await ReviewModel.create(req.body)
            res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }

    }

    update = async (req, res) => {
        const { id } = req.params || 0

        const { title, username, review } = req.body;

        if(title && username && review) {
            const model = await ReviewModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({ msg: 'Massage updated' })
        } else {
            res.sendStatus(418)
        }
    }
}

export default ReviewController