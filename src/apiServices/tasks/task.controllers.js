import Task from './task.model';

const createTask = (req, res) => {
    const newTask = new Task({
        userId: req.params._id,
        description: req.body.description,
        duration: req.body.duration,
        date: new Date(req.body.date),
        dateFormatted: new Date(req.body.date).toUTCString()
    });

    newTask.save();

    res.json({
        description: newTask.description,
        duration: newTask.duration,
        date: newTask.dateFormatted
    });
};

const showUserTasks = async (req, res) => {
    const {
        from,
        to,
        limit
    } = req.query;

    const count = await Task.find({ userId: { $in: req.params._id } }).count();

    if(!from || !to || !limit) {
        const user = req.body.userTask;
        let showData = await Task.find({ userId: { $in: req.params._id } }, { _id: 0, userId: 0 });
    } else {
        showData = await Task.find({ $and: [{ date:{ $gte: new Date(from), $lte: new Date(to) } } ] }, { _id: 0, userId: 0 }).limit(limit);
    }
    
    res.json({
        _id: user._id,
        username: user.username,
        count,
        log: showData
    });
};

const showSpecificUserTasks = async(req, res) => {

};

export default {
    createTask,
    showUserTasks
};