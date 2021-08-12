import taskModel from '../models/task.js'

class Tasks {
    async getTasks(listId) {
        return taskModel.getTasks(listId);
    }
    async getTask(listId, id) {
        return taskModel.getTask(listId, id);
    }
    async createTask(title, done, due_date, list_id) {
        return taskModel.createTask(title, done, due_date, list_id)
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
    async putTask(req, res){
        const id = req.params.id;

    }
}
export default new Tasks();