import { MongoClient, ObjectId } from 'mongodb';

// Vercel Build Error ফিক্স করার জন্য এই লাইনটি সবচেয়ে গুরুত্বপূর্ণ
export const dynamic = 'force-dynamic';

const uri = process.env.MONGODB_URI;

// বার বার কানেকশন হওয়া আটকাতে একটি গ্লোবাল ক্লায়েন্ট
let client;
async function getDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db("gyankoshDB");
}

// ১. সব দোয়া পাওয়ার জন্য (GET)
export async function GET() {
  try {
    const db = await getDB();
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
    const db = await getDB();
    const result = await db.collection("duas").insertOne(body);
    return Response.json({ success: true, result }, { status: 201 });
  } catch (error) {
    return Response.json({ error: "সেভ করতে সমস্যা" }, { status: 500 });
  }
}

// ৩. ডিলিট করার জন্য (DELETE)
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return Response.json({ error: "ID প্রয়োজন" }, { status: 400 });

    const db = await getDB();
    const result = await db.collection("duas").deleteOne({ _id: new ObjectId(id) });
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: "ডিলিট করতে সমস্যা" }, { status: 500 });
  }
}