require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// ১. মিডলওয়্যার (এটি ডাটা রিসিভ করতে সাহায্য করে)
app.use(cors());
app.use(express.json());

// ২. MongoDB কানেকশন লিঙ্ক
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6hkmruy.mongodb.net/gyankoshDB?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// ... আগের ইম্পোর্ট সব ঠিক থাকবে ...

async function run() {
  try {
    await client.connect();
    const db = client.db("gyankoshDB");
    const duaCollection = db.collection("duas");
    console.log("✅ Database connected successfully!");

    // --- ডাটা পাওয়ার রুট (GET) ---
    app.get('/api/duas', async (req, res) => {
      console.log("🔍 [GET Request]: কেউ দোয়াগুলো দেখতে চাইছে...");
      const result = await duaCollection.find().toArray();
      res.send(result);
    });

    // --- ডাটা সেভ করার রুট (POST) ---
    app.post('/api/duas', async (req, res) => {
      console.log("📥 [POST Request]: ফ্রন্টএন্ড থেকে নতুন ডাটা এসেছে!");
      console.log("📦 কন্টেন্ট:", req.body); // এটি আপনার ব্যাকএন্ড টার্মিনালে দেখা যাবে

      try {
        const result = await duaCollection.insertOne(req.body);
        console.log("🚀 ডাটাবেসে সেভ হয়েছে, ID:", result.insertedId);
        res.status(201).send({ success: true, message: "সেভ হয়েছে!", result });
      } catch (err) {
        console.error("❌ সেভ করতে গিয়ে এরর:", err);
        res.status(500).send({ success: false, message: err.message });
      }
    });
    app.delete('/api/duas/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await duaCollection.deleteOne(query);
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ message: "ডিলিট করতে সমস্যা হয়েছে" });
      }
    });

  } catch (error) {
    console.error("❌ কানেকশন এরর:", error);
  }
}
run().catch(console.dir);

// সার্ভার স্টার্ট হওয়ার সময় লগ
app.listen(port, () => {
  console.log(`🚀 সার্ভার রানিং: http://localhost:${port}`);
});