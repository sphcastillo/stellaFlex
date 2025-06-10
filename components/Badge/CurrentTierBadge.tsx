'use client'

import useMembershipTier from "@/hooks/useMembershipTier"
import { getTierFromLevel } from "@/types/types";
import { useUser } from "@clerk/nextjs";
import Badge from "./Badge";

function CurrentTierBadge() {
    const membershipTier = useMembershipTier();
    console.log("Current Tier Badge says: ", membershipTier)
    const { user } = useUser();

    if(!user || !membershipTier) return null;

    const tierAccess = getTierFromLevel(membershipTier);
    console.log("Current Tier Badge Access says: ", tierAccess)
    
    return <Badge variant='interactive' tier={tierAccess} link='/pricing' />
}
export default CurrentTierBadge;