import {Op} from "sequelize";

import models from "../DB/index.js";

class DashboardModel {
    async getDashboard(req, res) {
        let today = new Date(2021, 8, 12, 0,0,0,0);
        let deadLine = new Date(2021, 8, 12, 23,59,59,59);

        res.json(await models.Lists.findAndCountAll({
                attributes: ['title'],
                include: [
                    {
                        model: models.Todo,
                        where: {
                            due_date: {
                                [Op.between]: [today, deadLine]
                            }
                        },
                        attributes: ['task'],
                        required: true,

                    }
                ],

            })
        )

    }
}

export default new DashboardModel();