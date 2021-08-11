import {Op} from 'sequelize'
import models from '../modelsDB/models'

class CollectionModel {

    async showDate(res) {
        let result = {};
        let today = new Date(2021, 8, 12, 0,0,0,0);
        let deadLine = new Date(2021, 8, 12, 23,59,59,59);
        await models.Todo.findAll({
            where: {
                due_date: {
                    [Op.between]: [today, deadLine]
                }
            },
            attributes: ['task'],
            include: {
                model: models.Lists,
                attributes: ['title'],
            }
        }).then(data => {
            result = data
        })
        return  result;
    }
}

module.exports = new CollectionModel();