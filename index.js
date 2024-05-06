import express from 'express';
const app=express();
import db from './db/client.js';
import { userSchema } from './db/schema.js';
import {v4} from 'uuid';
import { eq } from 'drizzle-orm';
 
app.use(express.json());


// create a user 
app.post('/create',async(req,res,next)=>{
    let userId=v4();
    await  db.insert(userSchema).values({
        id:userId,
        name:req.body.name,
        bio:req.body.bio

    })

    let user= await db.select().from(userSchema).where(eq(userSchema.id,userId));
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);

})

//get all users
app.get('/users', async (req, res, next) => {
    const users = await db.select().from(userSchema);
    return res.json(users);
});


// Update a user 
app.put('/users/:name', async (req, res, next) => {
    const { name, bio } = req.body;
    await db.update(userSchema).set({ name, bio }).where(eq(userSchema.name, req.params.name));
    const updatedUser = await db.select().from(userSchema).where(eq(userSchema.name, req.params.name));
    return res.json(updatedUser);
});


// Delete a user by name
app.delete('/users/:name', async (req, res, next) => {
    const name = req.params.name;
    await db.delete(userSchema).where(eq(userSchema.name, name)).execute();
    return res.send({message:"Deleted successfully"}); // 204 No Content status
});




app.listen(8080,()=>{
    console.log('listening on port 8080');
})