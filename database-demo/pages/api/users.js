import { connectToMonogDatabase } from "@/mongo";


export  default async function handler(req,res) {
    const client =await connectToMonogDatabase();

    const db =client.db();
    const userCollection= db.collection("users");

    const users= await userCollection.find({}).toArray();
    (await client).close();
    res.status(200).json(users);
}

// export default function handler(req,res){
//     console.log("Method: "+req.method);
//     if(req.method=="GET"){
//         //console.log(req.query);
//         const {name}=req.query;
//         res.status(200).json({message:"Hello "+name+ ". This is a get response"});
        
//     }

//     if(req.method =="POST"){
//         console.log(req.body);
//         const {name}= req.body//JSON.parse(req.body);
//         res.status(200).json({message:"Hello "+name+". This is a post response"})
//     }

//     res.status(405).end();

// }