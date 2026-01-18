import { MongoClient, ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';

const uri = process.env.MONGODB_URI;

export async function GET() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("gyankoshDB");
    const result = await db.collection("duas").find().toArray();
    return Response.json(result);
  } catch (error) {
    console.error("Database Error:", error);
    return Response.json({ error: "ডাটাবেস কানেকশনে সমস্যা" }, { status: 500 });
  } finally {
    await client.close(); // কানেকশন বন্ধ করা জরুরি
  }
}

export async function POST(req) {
  const client = new MongoClient(uri);
  try {
    const body = await req.json();
    await client.connect();
    const db = client.db("gyankoshDB");
    const result = await db.collection("duas").insertOne(body);
    return Response.json(result, { status: 201 });
  } catch (error) {
    return Response.json({ error: "সেভ করতে সমস্যা" }, { status: 500 });
  } finally {
    await client.close();
  }
}