import { MongoClient, ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';

const uri = process.env.MONGODB_URI;

// ডাটাবেস কানেকশন ফাংশন
async function getDuaCollection() {
  console.log("🛠️ [API]: ডাটাবেসে কানেক্ট করার চেষ্টা করছি...");
  if (!uri) {
    console.error("❌ [ERROR]: MONGODB_URI পাওয়া যায়নি! Vercel Settings চেক করুন।");
    throw new Error("MONGODB_URI is missing");
  }
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("gyankoshDB");
  return { client, collection: db.collection("duas") };
}

// ১. সব দোয়া পাওয়ার জন্য (GET)
export async function GET() {
  console.log("🔍 [GET]: ডাটা খোঁজা হচ্ছে...");
  let client;
  try {
    const connection = await getDuaCollection();
    client = connection.client;
    const result = await connection.collection.find().toArray();
    console.log("✅ [GET]: মোট দোয়া পাওয়া গেছে:", result.length);
    return Response.json(result);
  } catch (error) {
    console.error("❌ [GET ERROR]:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    if (client) await client.close();
  }
}

// ২. নতুন দোয়া যোগ করার জন্য (POST)
export async function POST(req) {
  console.log("📥 [POST]: নতুন ডাটা আসছে...");
  let client;
  try {
    const body = await req.json();
    const connection = await getDuaCollection();
    client = connection.client;
    const result = await connection.collection.insertOne(body);
    console.log("🚀 [POST]: সফলভাবে সেভ হয়েছে, ID:", result.insertedId);
    return Response.json({ success: true, result }, { status: 201 });
  } catch (error) {
    console.error("❌ [POST ERROR]:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
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
      console.log("🗑️ [DELETE]: এই আইডি ডিলিট হবে:", id);

      const connection = await getDuaCollection();
      client = connection.client;
      const result = await connection.collection.deleteOne({ _id: new ObjectId(id) });
      return Response.json(result);
    } catch (error) {
      console.error("❌ [DELETE ERROR]:", error.message);
      return Response.json({ error: error.message }, { status: 500 });
    } finally {
      if (client) await client.close();
    }
}