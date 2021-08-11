import taskModel from '../models/tasks'

class Tasks {
    async createTask(req, res) {
        const {task, done, due_date, todosListId} = req.body;
        res.json(await taskModel.createTask(task, done, due_date, todosListId));
    }

    async getTasks(req, res) {
        res.json(await taskModel.getTasks());
    }


    async getTask(req, res) {
        const id = req.params.id;
        try {
            res.status(200);
            res.json(await taskModel.getTask(id));
        } catch {
            res.status(400);
            res.end('Bad request');
        }
    }

    async updateTask(req, res) {
        const options = req.body;
        const id = req.params.id;
        try {
            res.status(await taskModel.updateTask(options, id));
            res.end('Updated')
        } catch {
            res.status(400);
            res.end('Bad request');
        }
    }

    async deleteTask(req, res) {
        const id = req.params.id;
        try {
            await taskModel.deleteTask(id);
            res.status(200);
            res.end();
        } catch {
            res.status(400);
            res.end('Bad request');
        }

    }
}
export default new Tasks();