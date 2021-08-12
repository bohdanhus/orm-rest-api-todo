import models from "../DB/index.js";

class TaskModel {


    getTasks(listId) {
        return models.Todo.findAll({
                where: {list_id: listId},
                raw: true
            },
            {attributes: ['id', 'name', 'done', 'due_date']})
            .then(list => {
                return list;
            }).catch(err => console.log(err));
    }

    getTask(listId, id) {
        return models.Todo.findAll({
            where: {id: id}
        })
            .then(task => {
                return task;
            }).catch(err => console.log(err))
    }

    createTask(listId, body) {
        return models.Todo.create({
            id: body.id, title: body.title, done: body.done, due_date: body.due_date, list_id: body.list_id
        })
            .then(r => {
                let task;
                task = {id: r.id, title: r.title,done: r.done,due_date: r.due_date, list_id: r.list_id};
                return task;
            }).catch(err => console.log(err))
    }

    async updateTask(options, id) {
        const tasksField = ['title', 'done', 'due_date', 'list_id'];
        let updatedField = {};

        tasksField.forEach(elem => {
            if (options[elem] !== undefined) {
                updatedField[elem] = options[elem];
            }
        })

        await models.Todo.update(
            updatedField,
            {
                where: {
                    id: id
                }
            }
        )
        return 200;
    }

    async deleteTask(id) {
        await models.Todo.destroy({
            where: {
                id: id
            }
        })
    }

}


export default new TaskModel();
//https://www.bezkoder.com/node-express-sequelize-postgresql/#Configure_PostgreSQL_database_038_Sequelize