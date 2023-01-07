const express = require('express');
const router = express.Router();

const {
   getAllUser,
   createUser,
   updateUsers,
   deleteUser,
   getOneUser,
   singin 
} = require('../controller/user.controller');

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getOneUser).patch(updateUsers).delete(deleteUser);

router.post('/login', singin);


module.exports = router;

