import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const { url } = params; // matches [url] folder

  const client = await clientPromise;
  const db = client.db("shrinkr");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: url }); // assuming DB field is 'shorturl'

  if (!doc) {
    redirect(process.env.NEXT_PUBLIC_HOST);
  }

  redirect(doc.url);
}
