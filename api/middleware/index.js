const Users = require('../users/users-model');
const Items = require('../users/usersItems-model');

module.exports = {
    checkUser,
    checkId,
    checkPayload
}

// check if user exists
async function checkUser(req, res, next) {
    const user = req.params.user;
    const data = await Users.getUserById(user);
    if (data) {
        next();
    } else {
        res.status(404).json({ message: "Specified user not found" });
    }
};

// check if item exists
async function checkId(req, res, next) {
    const id = req.params.id;
    const user = req.params.user;
    const data = await Items.getById(user, id);
    if (data) {
        next();
    } else {
        res.status(404).json({ message: "Item with specified id belonging to specified user does not exist" })
    }
}

// check if request body contains necessary information
async function checkPayload(req, res, next) {
    const body = req.body;
    if (!body.name || !body.price || !body.market || !body.category_id || !body.user_id) {
        res.status(400).json({ message: "Body must include name, price, market, category_id, and user_id" })
    } else {
        next();
    }
};