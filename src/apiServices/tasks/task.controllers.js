import Task from './task.model';

const createTask = (req, res) => {
    const newTask = new Task({
        userId: req.params._id,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    });

    newTask.save();

    res.json({
        description: newTask.description,
        duration: newTask.duration,
        date: newTask.date
    });
};

export default createTask;