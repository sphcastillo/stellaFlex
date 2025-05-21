export type SubscriptionTierAccess = 'startStrong' | 'powerPulse' | 'elevateElite';
export type MembershipLevel = 1 | 2 | 3;

export interface Membership extends Record<SubscriptionTierAccess, MembershipLevel>{
    startStrong: 1;
    powerPulse: 2;
    elevateElite: 3;
};

export const tierMap: Record<SubscriptionTierAccess, MembershipLevel> = {
    startStrong: 1,
    powerPulse: 2,
    elevateElite: 3,
}

export const membershipMap: Record<MembershipLevel, string> = {
    1: "Level 1: Start Strong",
    2: "Level 2: Power Pulse",
    3: "Level 3: Elevate Elite",
}

export const getTierFromLevel = (level: MembershipLevel) : SubscriptionTierAccess => {
    return Object.entries(tierMap).find(
        ([,value]) => value === level
    )?.[0] as SubscriptionTierAccess;
}

// Support legacy tier strings from older documents
export const legacyTierAccessMap: Record<string, SubscriptionTierAccess> = {
    start: "startStrong",
    pulse: "powerPulse",
    elite: "elevateElite",
    startStrong: "startStrong",
    powerPulse: "powerPulse",
    elevateElite: "elevateElite",
  };
  
  export function normalizeTierAccess(
    value: string
  ): SubscriptionTierAccess | undefined {
    return legacyTierAccessMap[value];
  }
  