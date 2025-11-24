import { MongoClient } from 'mongodb';

export default async function handler(req, res) {

    const client = new MongoClient(process.env.MONGODB_URI);

    const name = req.query.name;
    const choice = req.query.comment;
    const path = req.query.path;
    const id = req.query.id

    try {

        await client.connect();

        const db = client.db("feedback");
        temp = db.collection("results").find({name: name, choice, choice, path: path}, {name: 0, choice: 0, path: 0})
        if (id && temp[_id] === id) {
            // update
            db.collection("results").updateOne({_id: id}, {choice: choice})
        }
        else { 
            db.collection("results").insertOne({name: name, choice: choice, path: path})
        }

        console.log(data)
        res.status(200).json(data);
    } 
    catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ message: error });
    } 
    finally {
        await client.close();
    }

}