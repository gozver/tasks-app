const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Task = mongoose.model('Task');

/* GET all tasks. */
router.get('/', function(req, res, next) {
   let query = Task.find({});
   query.exec(function (err, docs) {
    return res.send(docs);
   });        
});


/* POST - Create a new Task */
router.post('/', function(req, res, next) {  
  const task = new Task(req.body);
  return task.save().then(() => res.json(task));
});


/* PUT - Update a Task */
router.put('/:id', function(req, res, next) {
  Task.findById(req.params.id, (err, task) => {
    task.completed = req.body.completed;
    task.save();
    console.log('Task successfully updated in tasks collection!');
    res.send(task);
  });  
});


/* DELETE - Remove a Task */
router.delete('/:id', function(req, res, next) {
  Task.deleteOne({
    _id: req.params.id,
  }, function (err, user) {
    if (err)
      return console.error(err);

    console.log('Task successfully removed from tasks collection!');
    res.status(200).send();
  });  
});


module.exports = router;
