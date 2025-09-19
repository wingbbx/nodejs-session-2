import { Router } from "express";
import { createUser, deleteUser, getUsers } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get('/', async (req, res) => {
    
    const data = await getUsers();

    res.status(200).json(data);
})

userRoutes.delete('/:id', async (req, res) => {

    const { id } = req.params;
    
    const data = await deleteUser(id);

    // status destroy resources
    res.status(200).json(data);
})

userRoutes.post('/', async (req, res) => {

    const { name, email } = req.body;
    
    const user = { name, email }

    const data = await createUser(user);

    res.status(201).json(data);
})

export default userRoutes;