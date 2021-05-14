import User from './user.model';

const createUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username
    });

    newUser.save();

    res.json({ username: newUser.username, id: newUser._id })
};

export default createUser;