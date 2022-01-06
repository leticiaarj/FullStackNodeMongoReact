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
    async update(req, res){
        await TaskModel.findByIdAndUpdate({'_id' : req.params.id}, req.body, { new : true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async all(req, res){
        await TaskModel.find({macadress:{'$eq': req.params.macadress}})
              .sort('when')
              .then(response => {
                return res.status(200).json(response);
              })
              .catch(error => {
                return res.status(500).json(error);
              });
      }
    
}

module.exports = new TaskController();