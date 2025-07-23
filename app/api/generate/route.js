import clientPromise from "@/lib/mongodb"
export async function POST(request) {
  const client = await clientPromise; //this is from the lib/mongodb.js
  const db = client.db("shrinkr"); //we are using a db called shrinkr
  const collection = db.collection("url"); //this is a collection for the urls
  
  //check if short url exists;
  const body = await request.json();

  const doc = await collection.findOne({shorturl : body.shorturl});
  if(doc){
    return Response.json({success : false, error : true,
      message: 'Short URL already exists' })
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
  });

  return Response.json({success : true, error : false,
    message: 'URL Generated Successfully' })
}