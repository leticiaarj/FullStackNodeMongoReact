const TaskModel = require('../model/TaskModel');

class TaskController{
    async create(req, res){
        const task = new TaskModel(req.body);
        await task       
            .save()
            .then(response => {
                return res.status(200).json(response);
            }) /* Se tudo der certo */
            .catch(error => {
                return res.status(500).json(error);
            }); /* Se não der certo*/ 
    }
}

module.exports = new TaskController();