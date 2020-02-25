const express=require('express')
const router=express.Router()

const {getUsers,updateUser,getUserDetails,deleteUser,createUser,loggedIn} = require('./users');

router.get('/user',getUsers);
router.put('/user',updateUser)
router.delete('/user',deleteUser);
router.post('/signup',createUser);
router.get('/sign/:userId/:userPassword',loggedIn)
router.get('/user/:userId',getUserDetails)

module.exports=router;