import client from "../../lib/mongodb"

export async function GET(request) {
  try {

    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    if (!path) {
      return Response.json(
        { error: "Path parameter is required" },
        { status: 400 }
      );
    }

    // Make sure client is connected
    await client.connect();
    
    const database = client.db("feedback");
    const collection = database.collection("results");
    
    const data = await collection.find({ topic: path }).toArray();
    
    console.log(`Found ${data.length} questions for path: ${path}`);
    return Response.json(data);
    
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { error: "Failed to fetch questions: " + error.message },
      { status: 500 }
    );
  }
}