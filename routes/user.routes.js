// const { getAllUser,
//         createUser,
//         updateUsers,
//         deleteUser,
//         getOneUser,
//         singin 
//     } = require('../controller/user.controller')

// const router = require('express').Router()

// router.get('/',getAllUser)
// router.get('/:id',getOneUser)
// router.post('/',createUser)
// router.patch('/:id',updateUsers)
// router.delete('/:id',deleteUser)


// router.post('/login',singin)



// module.exports = router


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

router.get('/', getAllUser);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.patch('/:id', updateUsers);
router.delete('/:id', deleteUser);

router.post('/login', singin);

module.exports = router;