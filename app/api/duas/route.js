import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// ১. ডাটাবেস থেকে সব দোয়া পাওয়ার জন্য (GET)
export async function GET() {
  try {
    await client.connect();
    const db = client.db("gyankoshDB");
    const result = await db.collection("duas").find().toArray();
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: "ডাটা আনতে সমস্যা" }, { status: 500 });
  }
}

// ২. নতুন দোয়া যোগ করার জন্য (POST)
export async function POST(req) {
  try {
    const body = await req.json();
    await client.connect();
    const db = client.db("gyankoshDB");
    const result = await db.collection("duas").insertOne(body);
    return Response.json(result, { status: 201 });
  } catch (error) {
    return Response.json({ error: "সেভ করতে সমস্যা" }, { status: 500 });
  }
}

// ৩. ডিলিট করার জন্য (DELETE)
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    await client.connect();
    const db = client.db("gyankoshDB");
    const result = await db.collection("duas").deleteOne({ _id: new ObjectId(id) });
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: "ডিলিট করতে সমস্যা" }, { status: 500 });
  }
}