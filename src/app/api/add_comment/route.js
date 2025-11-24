import client from "../../lib/mongodb"

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get("name");
    const comment = searchParams.get("comment")
    const path = searchParams.get("path");

    console.log("Adding comment:", { name, comment, path });

    if (!name || !comment || !path) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await client.connect();
    
    const database = client.db("feedback");
    const collection = database.collection("comments");
    
    const result = await collection.insertOne({
      name,
      comment, 
      path,
      createdAt: new Date()
    });
    
    return Response.json({ 
      success: true, 
      insertedId: result.insertedId 
    });
    
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { error: "Failed to add comment: " + error.message },
      { status: 500 }
    );
  }
}