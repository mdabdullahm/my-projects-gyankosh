import { MongoClient, ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';
const uri = process.env.MONGODB_URI;

// ১. সব ছবির লিঙ্ক পাওয়ার জন্য (GET)
export async function GET() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("gyankoshDB");
    const result = await db.collection("gallery").find().toArray();
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

// ২. নতুন ছবির লিঙ্ক সেভ করার জন্য (POST)
export async function POST(req) {
  const client = new MongoClient(uri);
  try {
    const body = await req.json();
    await client.connect();
    const db = client.db("gyankoshDB");
    const result = await db.collection("gallery").insertOne({
      ...body,
      createdAt: new Date().toLocaleDateString('bn-BD')
    });
    return Response.json(result, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

// ৩. ছবি ডিলিট করার জন্য (DELETE)
export async function DELETE(req) {
    const client = new MongoClient(uri);
    try {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id');
      await client.connect();
      const db = client.db("gyankoshDB");
      const result = await db.collection("gallery").deleteOne({ _id: new ObjectId(id) });
      return Response.json(result);
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    } finally {
      await client.close();
    }
}