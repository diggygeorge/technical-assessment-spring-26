import { clientPromise } from "../lib/mongodb"

export default async function handler(req, res) {

    const client = await clientPromise;

    const name = req.query.name;
    const comment = req.query.comment;
    const path = req.query.path;

    try {

        await client.connect();

        const db = client.db("feedback");
        db.collection("comments").insertOne({name: name, comment: comment, path: path})
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