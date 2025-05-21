import { SubscriptionTierAccess } from "@/types/types";
import Badge from "./Badge";

interface TierBadgeProps {
  tierAccess: SubscriptionTierAccess;
}

function TierBadge({ tierAccess }: TierBadgeProps) {
  return <Badge tier={tierAccess} />;
}

export default TierBadge;