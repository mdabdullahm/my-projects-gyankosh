import { MongoClient, ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';

const uri = process.env.MONGODB_URI;

export async function GET() {
  // ১. চেক করুন লিঙ্কটি আছে কি না
  if (!uri) {
    return Response.json({ error: "ডাটাবেস লিঙ্ক সেট করা হয়নি" }, { status: 500 });
  }

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
    await client.close();
  }
}

export async function POST(req) {
  if (!uri) return Response.json({ error: "No URI" }, { status: 500 });
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

export async function DELETE(req) {
    if (!uri) return Response.json({ error: "No URI" }, { status: 500 });
    const client = new MongoClient(uri);
    try {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id');
      await client.connect();
      const db = client.db("gyankoshDB");
      const result = await db.collection("duas").deleteOne({ _id: new ObjectId(id) });
      return Response.json(result);
    } catch (error) {
      return Response.json({ error: "ডিলিট সমস্যা" }, { status: 500 });
    } finally {
      await client.close();
    }
}