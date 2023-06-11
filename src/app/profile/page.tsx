// "use client";
import React, { useEffect } from "react";
import { MongoClient } from "mongodb";
import dbConnect from "../../../config/dbConnect";

const Page = () => {
  //   const getData = async () => {
  //     await dbConnect();
  //     const uri = process.env.MONGODB_URI;
  //     const client = new MongoClient(uri!);

  //     const db = client.db("DressyDb");
  //     const collection = db.collection("Admins");

  //     const data = await collection.find().toArray();

  //     console.log(data);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <div>
      <h1 className="w-fit mx-auto text-4xl">Profile</h1>
    </div>
  );
};

export default Page;
