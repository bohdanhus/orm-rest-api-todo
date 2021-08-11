import models from '../modelsDB/models'

class ListModel {

    async createList(title) {
        return await models.Lists.create({title});
    }

    async getLists() {
        const lists = await models.Lists.findAll();
        return lists;
    }

    async updateTask(id, title) {
        console.log(id, title)
        await models.Lists.update(
            { title: title },
            { where: { id: id }}
        )
        return 200;
    }

    async deleteList(id) {
        models.Lists.destroy({
            where: {
                id: id
            }
        })
    }

    async getTasks(options, res) {
        const {todosListId, all} = options;
        if (all === 'true') {
            const tasks = await models.Lists.findAll({
                where: {
                    todosListId: todosListId
                }
            });
            res.status(200);
            res.json(tasks);
        }
        else if(all === 'false') {
            const tasks = await models.Lists.findAll({
                where: {
                    todosListId: todosListId,
                    done: false
                }
            });
            res.status(200);
            res.json(tasks);
        }
        else {
            res.status(400);
            res.end('Bad request');
        }
    }

}

export default new ListModel();