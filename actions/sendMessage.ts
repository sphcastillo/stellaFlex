"use server";

import { client } from "@/lib/schematic";
import { adminClient } from "@/sanity/lib/adminClient";
import { currentUser } from "@clerk/nextjs/server";

export async function sendMessage(message: string) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const entitlements = await client.entitlements.getFeatureUsageByCompany({
        keys: {
            id: user.id
        }
    });

    const feature = entitlements.data.features.find(
        (entitlement) => entitlement.feature?.eventSubtype === "send-dm"
    );

    // We already have the entitlements from the previvous call
    // Extract the DM Feature usage from the entitlements
    const DMfeature = entitlements.data.features.find(
        (feature) => feature.feature?.eventSubtype === 'send-dm'
    );

    const DMusage = DMfeature?.usage || 0;
    const DMallocation = DMfeature?.allocation || 0;

    if(DMusage >= DMallocation){
        throw new Error(
            "You have reached your Direct Message limit for this month!"
        );
    }

    if(!feature){
        throw new Error("User is not a ElevateElite");
    }

    const newMessage = await adminClient.create({
        _type: "message",
        senderName: user.fullName || user.emailAddresses[0].emailAddress,
        senderEmail: user.emailAddresses[0].emailAddress,
        messageBody: message,
    });

    await client.track({
        event: "send-dm",
        company: {
            id: user.id,
        },
        user: {
            id: user.id
        }
    });

    const updatedDMusage = DMusage + 1;
    console.log(`Updated DM usage: ${updatedDMusage}/${DMallocation}`);

    return {
        success: true,
        message: newMessage,
        usage: updatedDMusage,
        allocation: DMallocation
    };

  } catch (error) {
    console.error("Error sending message: ", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
