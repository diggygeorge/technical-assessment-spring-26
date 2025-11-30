import { MongoClient } from 'mongodb';
import { ObjectId } from "mongodb";


export async function POST(request) {

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id");
        const name = searchParams.get("name");
        const choice = searchParams.get("choice");
        let answerId = searchParams.get("answer_id");

        await client.connect();

        const db = client.db("feedback");
        const collection = db.collection("results")
        
        if (answerId === "undefined") {
            answerId = new ObjectId();
            console.log("New objectid created!", answerId)
        }
        else {
            answerId = new ObjectId(answerId)
        }
       
 // First, try to update an existing answer inside the answers array
    const updateExisting = await collection.updateOne(
      {
        _id: new ObjectId(id),
        "answers.id": answerId,
      },
      {
        $set: {
          "answers.$.choice": choice,
          "answers.$.updatedAt": new Date(),
        },
      }
    );

    let operationType = "updated";

    // If no existing answer was matched, add a new one
    if (updateExisting.matchedCount === 0) {
      await collection.updateOne(
        { _id: new ObjectId(id) },
        {
          $addToSet: {
            answers: {
              id: answerId,
              name,
              choice,
              createdAt: new Date(),
            },
          },
        },
        { upsert: true }
      );
      operationType = "inserted";
    }

    const updatedDoc = await collection.findOne({ _id: new ObjectId(id) });
    console.log("Updated document:", updatedDoc);

    return Response.json({
      success: true,
      operation: operationType,
      answerId: answerId.toString(),
    });
    } 
    catch (error) {
        console.error("API Error:", error);
        return Response.json(
        { error: "Failed to add comment: " + error.message },
        { status: 500 }
        )
    } 
    finally {
        await client.close();
    }

}