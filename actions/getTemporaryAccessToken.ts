'use server'
import { currentUser } from "@clerk/nextjs/server";
// Intialize Schematic SDK - 
import { SchematicClient } from "@schematichq/schematic-typescript-node";
const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({ apiKey });

// Get a temporary access token
export async function getTemporaryAccessToken() {
    console.log("Getting temporary access token");
    const user = await currentUser();
    console.log("user: ", user);

    if(!user){
        console.log("No user found, returning null");
        return null;
    }

    console.log(`Issuing temporary access token for user: ${user.id}`);
    const response = await client.accesstokens.issueTemporaryAccessToken({
        resourceType: 'company',
        lookup: { id: user.id },
    });

    console.log(
        "Token response received:",
        response.data ? "Token received" : "No token in response"
      );


    return response.data?.token;
}


