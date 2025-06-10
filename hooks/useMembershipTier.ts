// custom React hook that integrates w/ SchematicsHQ's feature flag system
// returns a user’s current membership level (as a MembershipLevel type: 1, 2, or 3) 
// based on which feature flags they have access to 
//  listens for subscription plan changes to refresh the UI when needed
'use client'

import { useSchematicFlag } from "@schematichq/schematic-react";
import { MembershipLevel } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Define the plan change response type
interface PlanChangeDetail {
    planId? : string;
    tier?: string;
    status?: string;
    // Add other properties based on what the checkout/unsubscribe response contains
}

// Define the custom event type
interface PlanChangedEvent extends CustomEvent {
    detail: PlanChangeDetail;
}

function useMembershipTier() : MembershipLevel | null {
  const router = useRouter();

  
  const hasStartStrongContent = useSchematicFlag('start-strong-content');
  console.log("has Started Strong? ", hasStartStrongContent)
  const hasPowerPulseContent = useSchematicFlag('power-pulse-content');
  console.log("has Power Pulse? ", hasPowerPulseContent)
  const hasElevateEliteContent = useSchematicFlag('elevate-elite-content');
  console.log("has Elevate Elite? ", hasElevateEliteContent)

  // Separate useEffect for plan-changed event listener
  useEffect(() => {
    // Listen for plan-changed events
    const handlePlanChanged = (event: PlanChangedEvent) => {
        // Handle the plan change event
        console.log("Plan changed: ", event.detail);

        // You can update UI, refresh data, or trigger other actions here
        // For example, you might want to refetch user entitlements
        window.location.reload(); 
    };

    window.addEventListener('plan-changed', handlePlanChanged as EventListener);

    return () => {
        window.removeEventListener(
            'plan-changed',
            handlePlanChanged as EventListener
        );
    };

  }, []); // Empty dependency array as this only needs to be set up once

  if(hasElevateEliteContent) return 3;
  if(hasPowerPulseContent) return 2;
  if(hasStartStrongContent) return 1;

  return null;  
}

export default useMembershipTier;

