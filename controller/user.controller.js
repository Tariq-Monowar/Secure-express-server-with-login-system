const {v4: uuidv4} = require('uuid')
const bcrypt = require('bcryptjs');
const User = require('../models/user.models')



//get All user ------------------------------------------------
const getAllUser = async (req, res) => {
    try {
        const getUser = await User.find()
        res.status(200).json(getUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//get one user by id------------------------------------------------
const getOneUser = async(req,res)=>{
    try {
        const find = await User.find({_id: req.params.id})
        res.status(200).json(find)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//Create user------------------------------------------------
const createUser = async (req, res) => {
    try {

        const { name, email, phone, work, password, cPassword } = req.body

        if (!name || !email || !phone || !password || !cPassword) {
            return res.status(404).json({
                message: "fill all fields"
            })
        }
        // Validate password
        if (password !== cPassword) {
            return res.status(404).json({
                message: "password does not match cPassword"
            })
        }
        // Check if user already exists
        const exuser = await User.findOne({email: email})
        if(exuser){
            return res.status(404).json({
                message: "user is already valid"
        })  
        } 

        // Hash the password and confirm password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const hashedCPassword = await bcrypt.hash(cPassword, salt)

        // Create new user
        const newUser = new User({
            id: uuidv4(),
            name, 
            email, 
            phone: Number(phone), 
            work, 
            password: hashedPassword, 
            cPassword: hashedCPassword 
        }) 
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//Update user by id------------------------------------------------
const updateUsers = async (req, res) => {
    try {
        // Destructuring the request body
        const { name, email, phone, work, password, cPassword } = req.body

        // Find the user by ID and update the fields
        const update = await User.findById({ _id: req.params.id })

        update.name = name
        update.email = email
        update.phone = Number(phone)
        update.work = work

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        update.password = hashedPassword
  
        if (update.password) {
            update.cPassword = hashedPassword
        }
        
        await update.save()
        res.status(201).json(update)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//delete user-----------------------------------------------
const deleteUser = async (req, res) => {
    try {
        // Find and delete the user by ID
        await User.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({
            message: "Successfully deleted"
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//login user------------------------------------------------
const singin = async(req,res)=>{
    try {
        const { email, password } = req.body

        if(!email || !password){
            res.status(404).json({
                message: "Missing email or password"
            })
            return;
        }

        const user = await User.findOne({email});
        if (!user) {
            res.status(404).json({
                message: "User not found"
            });
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            res.send({ 
              message: 'Successfully logged in',
            }); 
        } else {
            res.status(401).json({
                message: "Incorrect password"
            });
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = { getAllUser, createUser, updateUsers, deleteUser, getOneUser, singin }
