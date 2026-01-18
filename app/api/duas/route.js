import { MongoClient, ObjectId } from 'mongodb';

// Vercel Build Error ফিক্স করার জন্য এটি অত্যন্ত জরুরি
export const dynamic = 'force-dynamic';

const uri = process.env.MONGODB_URI;

// ডাটাবেস কানেকশনের জন্য একটি ফাংশন (এটি বিল্ড টাইমে এরর আটকাবে)
async function connectToDatabase() {
  if (!uri) {
    throw new Error("MONGODB_URI এনভায়রনমেন্ট ভ্যারিয়েবলটি পাওয়া যায়নি।");
  }
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("gyankoshDB");
  return { client, db };
}

// ১. সব দোয়া পাওয়ার জন্য (GET)
export async function GET() {
  let client;
  try {
    const connection = await connectToDatabase();
    client = connection.client;
    const db = connection.db;
    
    const result = await db.collection("duas").find().toArray();
    return Response.json(result);
  } catch (error) {
    console.error("Database Error:", error);
    return Response.json({ error: "ডাটা আনতে সমস্যা হয়েছে" }, { status: 500 });
  } finally {
    if (client) await client.close();
  }
}

// ২. নতুন দোয়া যোগ করার জন্য (POST)
export async function POST(req) {
  let client;
  try {
    const body = await req.json();
    const connection = await connectToDatabase();
    client = connection.client;
    const db = connection.db;

    const result = await db.collection("duas").insertOne(body);
    return Response.json({ success: true, result }, { status: 201 });
  } catch (error) {
    return Response.json({ error: "সেভ করতে সমস্যা" }, { status: 500 });
  } finally {
    if (client) await client.close();
  }
}

// ৩. ডিলিট করার জন্য (DELETE)
export async function DELETE(req) {
    let client;
    try {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id');
      
      const connection = await connectToDatabase();
      client = connection.client;
      const db = connection.db;

      const result = await db.collection("duas").deleteOne({ _id: new ObjectId(id) });
      return Response.json(result);
    } catch (error) {
      return Response.json({ error: "ডিলিট করতে সমস্যা" }, { status: 500 });
    } finally {
      if (client) await client.close();
    }
}